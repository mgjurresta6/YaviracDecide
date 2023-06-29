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
exports.ConfiguracionesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../shared/enums");
let ConfiguracionesService = class ConfiguracionesService {
    constructor(configuracionRepository) {
        this.configuracionRepository = configuracionRepository;
    }
    async catalogue() {
        const response = await this.configuracionRepository.findAndCount({
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
        const newConfiguracion = this.configuracionRepository.create(payload);
        const configuracionCreated = await this.configuracionRepository.save(newConfiguracion);
        return { data: configuracionCreated };
    }
    async findAll(params) {
        const data = await this.configuracionRepository.findAndCount({});
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const configuracion = await this.configuracionRepository.findOne({
            where: {
                id,
            },
        });
        if (!configuracion) {
            throw new common_1.NotFoundException(`La configuracion con id:  ${id} no se encontro`);
        }
        return { data: configuracion };
    }
    async update(id, payload) {
        const configuracion = await this.configuracionRepository.findOneBy({ id });
        if (!configuracion) {
            throw new common_1.NotFoundException(`La configuracion con id:  ${id} no se encontro`);
        }
        this.configuracionRepository.merge(configuracion, payload);
        const configuracionUpdated = await this.configuracionRepository.save(configuracion);
        return { data: configuracionUpdated };
    }
    async remove(id) {
        const configuracion = await this.configuracionRepository.findOneBy({ id });
        if (!configuracion) {
            throw new common_1.NotFoundException(`La configuracion con id:  ${id} no se encontro`);
        }
        const configuracionDeleted = await this.configuracionRepository.softRemove(configuracion);
        return { data: configuracionDeleted };
    }
    async removeAll(payload) {
        const configuracionesDeleted = await this.configuracionRepository.softRemove(payload);
        return { data: configuracionesDeleted };
    }
};
ConfiguracionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.CONFIGURACION_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ConfiguracionesService);
exports.ConfiguracionesService = ConfiguracionesService;
//# sourceMappingURL=configuraciones.service.js.map