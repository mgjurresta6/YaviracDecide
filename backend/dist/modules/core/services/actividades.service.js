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
exports.ActividadesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let ActividadesService = class ActividadesService {
    constructor(actividadRepository, cataloguesService) {
        this.actividadRepository = actividadRepository;
        this.cataloguesService = cataloguesService;
    }
    async catalogue() {
        const response = await this.actividadRepository.findAndCount({
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
        const newActividad = this.actividadRepository.create(payload);
        const actividadCreated = await this.actividadRepository.save(newActividad);
        return { data: actividadCreated };
    }
    async findAll(params) {
        const data = await this.actividadRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const actividad = await this.actividadRepository.findOne({
            relations: ['institution', 'modality', 'state', 'type'],
            where: {
                id,
            },
        });
        if (!actividad) {
            throw new common_1.NotFoundException(`La actividad con id:  ${id} no se encontro`);
        }
        return { data: actividad };
    }
    async update(id, payload) {
        const actividad = await this.actividadRepository.findOneBy({ id });
        if (!actividad) {
            throw new common_1.NotFoundException(`La actividad con id:  ${id} no se encontro`);
        }
        this.actividadRepository.merge(actividad, payload);
        const actividadUpdated = await this.actividadRepository.save(actividad);
        return { data: actividadUpdated };
    }
    async remove(id) {
        const actividad = await this.actividadRepository.findOneBy({ id });
        if (!actividad) {
            throw new common_1.NotFoundException(`La actividad con id:  ${id} no se encontro`);
        }
        const actividadDeleted = await this.actividadRepository.softRemove(actividad);
        return { data: actividadDeleted };
    }
    async removeAll(payload) {
        const actividadesDeleted = await this.actividadRepository.softRemove(payload);
        return { data: actividadesDeleted };
    }
};
ActividadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.ACTIVIDAD_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CataloguesService])
], ActividadesService);
exports.ActividadesService = ActividadesService;
//# sourceMappingURL=actividades.service.js.map