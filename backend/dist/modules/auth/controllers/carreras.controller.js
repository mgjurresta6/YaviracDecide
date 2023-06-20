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
exports.CarrerasController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../../core/services");
let CarrerasController = class CarrerasController {
    constructor(carrerasService) {
        this.carrerasService = carrerasService;
    }
    async catalogue() {
        const serviceResponse = await this.carrerasService.catalogue();
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: `Catalogo Actividades`,
            title: `Catalogo`,
        };
    }
    async create(payload) {
        const serviceResponse = await this.carrerasService.create(payload);
        return {
            data: serviceResponse.data,
            message: 'Actividad fue creada',
            title: 'Actividad Creada',
        };
    }
    async findAll(params) {
        const serviceResponse = await this.carrerasService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: 'Econtrar todas las Actividades',
            title: 'Exitoso',
        };
    }
    async findOne(id) {
        const serviceResponse = await this.carrerasService.findOne(id);
        return {
            data: serviceResponse.data,
            message: `Encontar una Actividad`,
            title: `Exitoso`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.carrerasService.update(id, payload);
        return {
            data: serviceResponse.data,
            message: `Actividad fue actualizada`,
            title: `Actividad Actualizada`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.carrerasService.remove(id);
        return {
            data: serviceResponse.data,
            message: `Actividad fue eliminada`,
            title: `Actividad Eliminada`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.carrerasService.removeAll(payload);
        return {
            data: serviceResponse.data,
            message: `Actividades fueron eliminadas`,
            title: `Actividades Eliminadas`,
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Catalogo Actividades' }),
    (0, common_1.Get)('catalogue'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "catalogue", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear Actividad' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontrar todas las Actividades' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontar una Actividad' }),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar Actividad' }),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar Actividad' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar todas las  Actividades' }),
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CarrerasController.prototype, "removeAll", null);
CarrerasController = __decorate([
    (0, common_1.Controller)('carreras'),
    __metadata("design:paramtypes", [services_1.CarrerasService])
], CarrerasController);
exports.CarrerasController = CarrerasController;
//# sourceMappingURL=carreras.controller.js.map