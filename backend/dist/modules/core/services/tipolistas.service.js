"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoListasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let TipoListasService = class TipoListasService {
    constructor(tipolistaRepository, cataloguesService) {
        this.tipolistaRepository = tipolistaRepository;
        this.cataloguesService = cataloguesService;
    }
    async catalogue() {
        const response = await this.tipolistaRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
            take: 1000,
        });
        return {
            pagination: {
                totalItems: response[1],
                limit: 10,
            },
            data: response[0],
        };
    }
    async create(payload) {
        const newTipoLista = this.tipolistaRepository.create(payload);
        newTipoLista.modality = await this.cataloguesService.findOne(payload.modality.id);
        newTipoLista.state = await this.cataloguesService.findOne(payload.state.id);
        newTipoLista.type = await this.cataloguesService.findOne(payload.type.id);
        const tipolistaCreated = await this.tipolistaRepository.save(newTipoLista);
        return { data: tipolistaCreated };
    }
    async findAll(params) {
        const data = await this.tipolistaRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const tipoLista = await this.tipolistaRepository.findOne({
            relations: ['institution', 'modality', 'state', 'type'],
            where: {
                id,
            },
        });
        if (!tipoLista) {
            throw new common_1.NotFoundException(`El tipo de lista con id:  ${id} no se encontro`);
        }
        return { data: tipoLista };
    }
    async update(id, payload) {
        const tipoLista = await this.tipolistaRepository.findOneBy({ id });
        if (!tipoLista) {
            throw new common_1.NotFoundException(`El tipo de lista con id:  ${id} no se encontro`);
        }
        this.tipolistaRepository.merge(tipoLista, payload);
        const tipolistaUpdated = await this.tipolistaRepository.save(tipoLista);
        return { data: tipolistaUpdated };
    }
    async remove(id) {
        const tipoLista = await this.tipolistaRepository.findOneBy({ id });
        if (!tipoLista) {
            throw new common_1.NotFoundException(`El tipo de lista con id:  ${id} no se encontro`);
        }
        const tipolistaDeleted = await this.tipolistaRepository.softRemove(tipoLista);
        return { data: tipolistaDeleted };
    }
    async removeAll(payload) {
        const tipolistasDeleted = await this.tipolistaRepository.softRemove(payload);
        return { data: tipolistasDeleted };
    }
};
TipoListasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.TIPO_LISTA_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CataloguesService])
], TipoListasService);
exports.TipoListasService = TipoListasService;
//# sourceMappingURL=tipolistas.service.js.map