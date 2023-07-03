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
exports.CronogramasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../shared/enums");
const services_1 = require("./");
let CronogramasService = class CronogramasService {
    constructor(cronogramaRepository, actividadesService, periodosService) {
        this.cronogramaRepository = cronogramaRepository;
        this.actividadesService = actividadesService;
        this.periodosService = periodosService;
    }
    async catalogue() {
        const response = await this.cronogramaRepository.findAndCount({
            relations: ['actividad', 'periodo'],
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
        const newCronograma = this.cronogramaRepository.create(payload);
        const cronogramaCreated = await this.cronogramaRepository.save(newCronograma);
        return { data: cronogramaCreated };
    }
    async findAll(params) {
        const data = await this.cronogramaRepository.findAndCount({
            relations: ['actividad'],
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const cronograma = await this.cronogramaRepository.findOne({
            relations: ['actividad'],
            where: {
                id,
            },
        });
        if (!cronograma) {
            throw new common_1.NotFoundException(`El cronograma con id:  ${id} no se encontro`);
        }
        return { data: cronograma };
    }
    async update(id, payload) {
        const cronograma = await this.cronogramaRepository.findOneBy({ id });
        if (!cronograma) {
            throw new common_1.NotFoundException(`El cronograma con id:  ${id} no se encontro`);
        }
        this.cronogramaRepository.merge(cronograma, payload);
        const cronogramaUpdated = await this.cronogramaRepository.save(cronograma);
        return { data: cronogramaUpdated };
    }
    async remove(id) {
        const cronograma = await this.cronogramaRepository.findOneBy({ id });
        if (!cronograma) {
            throw new common_1.NotFoundException(`El cronograma con id:  ${id} no se encontro`);
        }
        const cronogramaDeleted = await this.cronogramaRepository.softRemove(cronograma);
        return { data: cronogramaDeleted };
    }
    async removeAll(payload) {
        const cronogramasDeleted = await this.cronogramaRepository.softRemove(payload);
        return { data: cronogramasDeleted };
    }
};
CronogramasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.CRONOGRAMA_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.ActividadesService,
        services_1.PeriodosService])
], CronogramasService);
exports.CronogramasService = CronogramasService;
//# sourceMappingURL=cronogramas.service.js.map