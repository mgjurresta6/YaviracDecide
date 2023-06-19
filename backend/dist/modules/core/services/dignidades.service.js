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
exports.DignidadesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let DignidadesService = class DignidadesService {
    constructor(dignidadRepository, cataloguesService) {
        this.dignidadRepository = dignidadRepository;
        this.cataloguesService = cataloguesService;
    }
    async catalogue() {
        const response = await this.dignidadRepository.findAndCount({
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
        const newDignidad = this.dignidadRepository.create(payload);
        newDignidad.modality = await this.cataloguesService.findOne(payload.modality.id);
        newDignidad.state = await this.cataloguesService.findOne(payload.state.id);
        newDignidad.type = await this.cataloguesService.findOne(payload.type.id);
        const dignidadCreated = await this.dignidadRepository.save(newDignidad);
        return { data: dignidadCreated };
    }
    async findAll(params) {
        const data = await this.dignidadRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const dignidad = await this.dignidadRepository.findOne({
            relations: ['institution', 'modality', 'state', 'type'],
            where: {
                id,
            },
        });
        if (!dignidad) {
            throw new common_1.NotFoundException(`La dignidad con id:  ${id} no se encontro`);
        }
        return { data: dignidad };
    }
    async update(id, payload) {
        const dignidad = await this.dignidadRepository.findOneBy({ id });
        if (!dignidad) {
            throw new common_1.NotFoundException(`La dignidad con id:  ${id} no se encontro`);
        }
        this.dignidadRepository.merge(dignidad, payload);
        const dignidadUpdated = await this.dignidadRepository.save(dignidad);
        return { data: dignidadUpdated };
    }
    async remove(id) {
        const dignidad = await this.dignidadRepository.findOneBy({ id });
        if (!dignidad) {
            throw new common_1.NotFoundException(`La dignidad con id:  ${id} no se encontro`);
        }
        const dignidadDeleted = await this.dignidadRepository.softRemove(dignidad);
        return { data: dignidadDeleted };
    }
    async removeAll(payload) {
        const dignidadesDeleted = await this.dignidadRepository.softRemove(payload);
        return { data: dignidadesDeleted };
    }
};
DignidadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.DIGNIDAD_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CataloguesService])
], DignidadesService);
exports.DignidadesService = DignidadesService;
//# sourceMappingURL=dignidades.service.js.map