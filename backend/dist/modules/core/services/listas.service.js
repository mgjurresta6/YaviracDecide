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
exports.ListasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let ListasService = class ListasService {
    constructor(listaRepository, cataloguesService) {
        this.listaRepository = listaRepository;
        this.cataloguesService = cataloguesService;
    }
    async catalogue() {
        const response = await this.listaRepository.findAndCount({
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
        const newLista = this.listaRepository.create(payload);
        newLista.modality = await this.cataloguesService.findOne(payload.modality.id);
        newLista.state = await this.cataloguesService.findOne(payload.state.id);
        newLista.type = await this.cataloguesService.findOne(payload.type.id);
        const listaCreated = await this.listaRepository.save(newLista);
        return { data: listaCreated };
    }
    async findAll(params) {
        const data = await this.listaRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const lista = await this.listaRepository.findOne({
            relations: ['institution', 'modality', 'state', 'type'],
            where: {
                id,
            },
        });
        if (!lista) {
            throw new common_1.NotFoundException(`La lista con id:  ${id} no se encontro`);
        }
        return { data: lista };
    }
    async update(id, payload) {
        const lista = await this.listaRepository.findOneBy({ id });
        if (!lista) {
            throw new common_1.NotFoundException(`La lista con id:  ${id} no se encontro`);
        }
        this.listaRepository.merge(lista, payload);
        const listaUpdated = await this.listaRepository.save(lista);
        return { data: listaUpdated };
    }
    async remove(id) {
        const lista = await this.listaRepository.findOneBy({ id });
        if (!lista) {
            throw new common_1.NotFoundException(`La lista con id:  ${id} no se encontro`);
        }
        const listaDeleted = await this.listaRepository.softRemove(lista);
        return { data: listaDeleted };
    }
    async removeAll(payload) {
        const listasDeleted = await this.listaRepository.softRemove(payload);
        return { data: listasDeleted };
    }
};
ListasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.LISTA_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CataloguesService])
], ListasService);
exports.ListasService = ListasService;
//# sourceMappingURL=listas.service.js.map