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
exports.PeriodoLectivosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../shared/enums");
let PeriodoLectivosService = class PeriodoLectivosService {
    constructor(periodolectivoRepository) {
        this.periodolectivoRepository = periodolectivoRepository;
    }
    async catalogue() {
        const response = await this.periodolectivoRepository.findAndCount({
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
        const newPeriodoLectivo = this.periodolectivoRepository.create(payload);
        const periodoCreated = await this.periodolectivoRepository.save(newPeriodoLectivo);
        return { data: periodoCreated };
    }
    async findAll(params) {
        const data = await this.periodolectivoRepository.findAndCount({});
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const periodo = await this.periodolectivoRepository.findOne({
            where: {
                id,
            },
        });
        if (!periodo) {
            throw new common_1.NotFoundException(`El periodo con id:  ${id} no se encontro`);
        }
        return { data: periodo };
    }
    async update(id, payload) {
        const periodo = await this.periodolectivoRepository.findOneBy({ id });
        if (!periodo) {
            throw new common_1.NotFoundException(`El periodo con id:  ${id} no se encontro`);
        }
        this.periodolectivoRepository.merge(periodo, payload);
        const periodoUpdated = await this.periodolectivoRepository.save(periodo);
        return { data: periodoUpdated };
    }
    async remove(id) {
        const periodo = await this.periodolectivoRepository.findOneBy({ id });
        if (!periodo) {
            throw new common_1.NotFoundException(`El periodo con id:  ${id} no se encontro`);
        }
        const periodoDeleted = await this.periodolectivoRepository.softRemove(periodo);
        return { data: periodoDeleted };
    }
    async removeAll(payload) {
        const periodosDeleted = await this.periodolectivoRepository.softRemove(payload);
        return { data: periodosDeleted };
    }
};
PeriodoLectivosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.PERIODO_LECTIVO_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PeriodoLectivosService);
exports.PeriodoLectivosService = PeriodoLectivosService;
//# sourceMappingURL=periodolectivos.service.js.map