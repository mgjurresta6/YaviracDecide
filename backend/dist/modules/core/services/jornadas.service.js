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
exports.JornadasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let JornadasService = class JornadasService {
    constructor(jornadasRepository, cataloguesService) {
        this.jornadasRepository = jornadasRepository;
        this.cataloguesService = cataloguesService;
    }
    async catalogue() {
        const response = await this.jornadasRepository.findAndCount({
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
        const newJornada = this.jornadasRepository.create(payload);
        newJornada.modality = await this.cataloguesService.findOne(payload.modality.id);
        newJornada.state = await this.cataloguesService.findOne(payload.state.id);
        newJornada.type = await this.cataloguesService.findOne(payload.type.id);
        const jornadaCreated = await this.jornadasRepository.save(newJornada);
        return { data: jornadaCreated };
    }
    async findAll(params) {
        const data = await this.jornadasRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const jornada = await this.jornadasRepository.findOne({
            relations: ['institution', 'modality', 'state', 'type'],
            where: {
                id,
            },
        });
        if (!jornada) {
            throw new common_1.NotFoundException(`La jornada con id:  ${id} no se encontro`);
        }
        return { data: jornada };
    }
    async update(id, payload) {
        const jornada = await this.jornadasRepository.findOneBy({ id });
        if (!jornada) {
            throw new common_1.NotFoundException(`La actividad con id:  ${id} no se encontro`);
        }
        this.jornadasRepository.merge(jornada, payload);
        const jornadaUpdated = await this.jornadasRepository.save(jornada);
        return { data: jornadaUpdated };
    }
    async remove(id) {
        const jornada = await this.jornadasRepository.findOneBy({ id });
        if (!jornada) {
            throw new common_1.NotFoundException(`La jornada con id:  ${id} no se encontro`);
        }
        const jornadaDeleted = await this.jornadasRepository.softRemove(jornada);
        return { data: jornada };
    }
    async removeAll(payload) {
        const jornadasDeleted = await this.jornadasRepository.softRemove(payload);
        return { data: jornadasDeleted };
    }
};
JornadasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.JORNADA_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CataloguesService])
], JornadasService);
exports.JornadasService = JornadasService;
//# sourceMappingURL=jornadas.service.js.map