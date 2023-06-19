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
exports.ResultadosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let ResultadosService = class ResultadosService {
    constructor(resultadoRepository, cataloguesService) {
        this.resultadoRepository = resultadoRepository;
        this.cataloguesService = cataloguesService;
    }
    async catalogue() {
        const response = await this.resultadoRepository.findAndCount({
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
        const newResultado = this.resultadoRepository.create(payload);
        newResultado.modality = await this.cataloguesService.findOne(payload.modality.id);
        newResultado.state = await this.cataloguesService.findOne(payload.state.id);
        newResultado.type = await this.cataloguesService.findOne(payload.type.id);
        const resultadoCreated = await this.resultadoRepository.save(newResultado);
        return { data: resultadoCreated };
    }
    async findAll(params) {
        const data = await this.resultadoRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const resultado = await this.resultadoRepository.findOne({
            relations: ['institution', 'modality', 'state', 'type'],
            where: {
                id,
            },
        });
        if (!resultado) {
            throw new common_1.NotFoundException(`El resultado con id:  ${id} no se encontro`);
        }
        return { data: resultado };
    }
    async update(id, payload) {
        const resultado = await this.resultadoRepository.findOneBy({ id });
        if (!resultado) {
            throw new common_1.NotFoundException(`El resultado con id:  ${id} no se encontro`);
        }
        this.resultadoRepository.merge(resultado, payload);
        const resultadoUpdated = await this.resultadoRepository.save(resultado);
        return { data: resultadoUpdated };
    }
    async remove(id) {
        const resultado = await this.resultadoRepository.findOneBy({ id });
        if (!resultado) {
            throw new common_1.NotFoundException(`El resultado con id:  ${id} no se encontro`);
        }
        const resultadoDeleted = await this.resultadoRepository.softRemove(resultado);
        return { data: resultadoDeleted };
    }
    async removeAll(payload) {
        const resultadosDeleted = await this.resultadoRepository.softRemove(payload);
        return { data: resultadosDeleted };
    }
};
ResultadosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.RESULTADO_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CataloguesService])
], ResultadosService);
exports.ResultadosService = ResultadosService;
//# sourceMappingURL=resultados.service.js.map