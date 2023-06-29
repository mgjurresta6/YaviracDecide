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
exports.tipoUsuariosController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
let tipoUsuariosController = class tipoUsuariosController {
    constructor(tipousuariosService) {
        this.tipousuariosService = tipousuariosService;
    }
    async catalogue() {
        const serviceResponse = await this.tipousuariosService.catalogue();
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: `Catalogo Tipos de usuario`,
            title: `Catalogo`,
        };
    }
    async create(payload) {
        const serviceResponse = await this.tipousuariosService.create(payload);
        return {
            data: serviceResponse.data,
            message: 'Tipo de usuario fue creada',
            title: 'Tipo de usuario Creada',
        };
    }
    async findAll(params) {
        const serviceResponse = await this.tipousuariosService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: 'Econtrar todas las Tipos de usuario',
            title: 'Exitoso',
        };
    }
    async findOne(id) {
        const serviceResponse = await this.tipousuariosService.findOne(id);
        return {
            data: serviceResponse.data,
            message: `Encontar una Tipo de usuario`,
            title: `Exitoso`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.tipousuariosService.update(id, payload);
        return {
            data: serviceResponse.data,
            message: `Tipo de usuario fue actualizada`,
            title: `Tipo de usuario Actualizada`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.tipousuariosService.remove(id);
        return {
            data: serviceResponse.data,
            message: `Tipo de usuario fue eliminada`,
            title: `Tipo de usuario Eliminada`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.tipousuariosService.removeAll(payload);
        return {
            data: serviceResponse.data,
            message: `Tipos de usuario fueron eliminadas`,
            title: `Tipos de usuario Eliminadas`,
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Catalogo Tipos de usuario' }),
    (0, common_1.Get)('catalogue'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], tipoUsuariosController.prototype, "catalogue", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear Tipo de usuario' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], tipoUsuariosController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontrar todas las Tipos de usuario' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], tipoUsuariosController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontar una Tipo de usuario' }),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], tipoUsuariosController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar Tipo de usuario' }),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], tipoUsuariosController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar Tipo de usuario' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], tipoUsuariosController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar todas las  Tipos de usuario' }),
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], tipoUsuariosController.prototype, "removeAll", null);
tipoUsuariosController = __decorate([
    (0, common_1.Controller)('tipousuarios'),
    __metadata("design:paramtypes", [services_1.TipoUsuariosService])
], tipoUsuariosController);
exports.tipoUsuariosController = tipoUsuariosController;
//# sourceMappingURL=usuariotipos.controller.js.map