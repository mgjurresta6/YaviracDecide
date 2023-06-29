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
exports.CarrerasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../shared/enums");
let CarrerasService = class CarrerasService {
    constructor(carreraRepository) {
        this.carreraRepository = carreraRepository;
    }
    async catalogue() {
        const response = await this.carreraRepository.findAndCount({
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
        const newCarrera = this.carreraRepository.create(payload);
        const carreraCreated = await this.carreraRepository.save(newCarrera);
        return { data: carreraCreated };
    }
    async findAll(params) {
        const data = await this.carreraRepository.findAndCount({});
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const carrera = await this.carreraRepository.findOne({
            where: {
                id,
            },
        });
        if (!carrera) {
            throw new common_1.NotFoundException(`La carrera con id:  ${id} no se encontro`);
        }
        return { data: carrera };
    }
    async update(id, payload) {
        const carrera = await this.carreraRepository.findOneBy({ id });
        if (!carrera) {
            throw new common_1.NotFoundException(`La actividad con id:  ${id} no se encontro`);
        }
        this.carreraRepository.merge(carrera, payload);
        const carreraUpdated = await this.carreraRepository.save(carrera);
        return { data: carreraUpdated };
    }
    async remove(id) {
        const carrera = await this.carreraRepository.findOneBy({ id });
        if (!carrera) {
            throw new common_1.NotFoundException(`La carrera con id:  ${id} no se encontro`);
        }
        const carreraDeleted = await this.carreraRepository.softRemove(carrera);
        return { data: carreraDeleted };
    }
    async removeAll(payload) {
        const carrerasDeleted = await this.carreraRepository.softRemove(payload);
        return { data: carrerasDeleted };
    }
};
CarrerasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.CARRERA_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CarrerasService);
exports.CarrerasService = CarrerasService;
//# sourceMappingURL=carreras.service.js.map