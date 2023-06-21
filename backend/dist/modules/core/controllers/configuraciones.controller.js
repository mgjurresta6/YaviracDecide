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
exports.ConfiguracionesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
let ConfiguracionesController = class ConfiguracionesController {
    constructor(configuracionesService) {
        this.configuracionesService = configuracionesService;
    }
    async create(payload) {
        const serviceResponse = await this.configuracionesService.create(payload);
        return {
            data: serviceResponse.data,
            message: 'Configuracion fue creada',
            title: 'Configuracion Creada',
        };
    }
    async findAll(params) {
        const serviceResponse = await this.configuracionesService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: 'Econtrar todas las Configuraciones',
            title: 'Exitoso',
        };
    }
    async findOne(id) {
        const serviceResponse = await this.configuracionesService.findOne(id);
        return {
            data: serviceResponse.data,
            message: `Encontar una Configuracion`,
            title: `Exitoso`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.configuracionesService.update(id, payload);
        return {
            data: serviceResponse.data,
            message: `Configuracion fue actualizada`,
            title: `Configuracion Actualizada`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.configuracionesService.remove(id);
        return {
            data: serviceResponse.data,
            message: `Configuracion fue eliminada`,
            title: `Configuracion Eliminada`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.configuracionesService.removeAll(payload);
        return {
            data: serviceResponse.data,
            message: `Configuraciones fueron eliminadas`,
            title: `Configuraciones Eliminadas`,
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear Configuracion' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfiguracionesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontrar todas las configuraciones' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConfiguracionesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontrar Configuracion' }),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfiguracionesController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar Configuracion' }),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ConfiguracionesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar Configuracion' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ConfiguracionesController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar todas las Configuraciones' }),
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ConfiguracionesController.prototype, "removeAll", null);
ConfiguracionesController = __decorate([
    (0, common_1.Controller)('configuraciones'),
    __metadata("design:paramtypes", [services_1.ConfiguracionesService])
], ConfiguracionesController);
exports.ConfiguracionesController = ConfiguracionesController;
//# sourceMappingURL=configuraciones.controller.js.map