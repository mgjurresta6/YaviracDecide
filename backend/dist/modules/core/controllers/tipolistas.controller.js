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
exports.TipoListasController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
let TipoListasController = class TipoListasController {
    constructor(tipolistasService) {
        this.tipolistasService = tipolistasService;
    }
    async catalogue() {
        const serviceResponse = await this.tipolistasService.catalogue();
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: `Catalogo Tipos de lista`,
            title: `Catalogo`,
        };
    }
    async create(payload) {
        const serviceResponse = await this.tipolistasService.create(payload);
        return {
            data: serviceResponse.data,
            message: 'Tipo de lista fue creada',
            title: 'Tipo de lista Creada',
        };
    }
    async findAll(params) {
        const serviceResponse = await this.tipolistasService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: 'Econtrar todas las Tipos de lista',
            title: 'Exitoso',
        };
    }
    async findOne(id) {
        const serviceResponse = await this.tipolistasService.findOne(id);
        return {
            data: serviceResponse.data,
            message: `Encontar una Tipo de lista`,
            title: `Exitoso`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.tipolistasService.update(id, payload);
        return {
            data: serviceResponse.data,
            message: `Tipo de lista fue actualizada`,
            title: `Tipo de lista Actualizada`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.tipolistasService.remove(id);
        return {
            data: serviceResponse.data,
            message: `Tipo de lista fue eliminada`,
            title: `Tipo de lista Eliminada`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.tipolistasService.removeAll(payload);
        return {
            data: serviceResponse.data,
            message: `Tipos de lista fueron eliminadas`,
            title: `Tipos de lista Eliminadas`,
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Catalogo Tipos de lista' }),
    (0, common_1.Get)('catalogue'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TipoListasController.prototype, "catalogue", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear Tipo de lista' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TipoListasController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontrar todas las Tipos de lista' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TipoListasController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontar una Tipo de lista' }),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TipoListasController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar Tipo de lista' }),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TipoListasController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar Tipo de lista' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TipoListasController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar todas las  Tipos de lista' }),
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], TipoListasController.prototype, "removeAll", null);
TipoListasController = __decorate([
    (0, common_1.Controller)('tipolistas'),
    __metadata("design:paramtypes", [services_1.TipoListasService])
], TipoListasController);
exports.TipoListasController = TipoListasController;
//# sourceMappingURL=tipolistas.controller.js.map