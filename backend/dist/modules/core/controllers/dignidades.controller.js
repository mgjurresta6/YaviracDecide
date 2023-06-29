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
exports.DignidadesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
let DignidadesController = class DignidadesController {
    constructor(dignidadesService) {
        this.dignidadesService = dignidadesService;
    }
    async create(payload) {
        const serviceResponse = await this.dignidadesService.create(payload);
        return {
            data: serviceResponse.data,
            message: 'Dignidad fue creada',
            title: 'Dignidad Creada',
        };
    }
    async findAll(params) {
        const serviceResponse = await this.dignidadesService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: 'Econtrar todas las Dignidades',
            title: 'Exitoso',
        };
    }
    async findOne(id) {
        const serviceResponse = await this.dignidadesService.findOne(id);
        return {
            data: serviceResponse.data,
            message: `Encontar una Dignidad`,
            title: `Exitoso`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.dignidadesService.update(id, payload);
        return {
            data: serviceResponse.data,
            message: `Dignidad fue actualizada`,
            title: `Dignidad Actualizada`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.dignidadesService.remove(id);
        return {
            data: serviceResponse.data,
            message: `Dignidad fue eliminada`,
            title: `Dignidad Eliminada`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.dignidadesService.removeAll(payload);
        return {
            data: serviceResponse.data,
            message: `Dignidades fueron eliminadas`,
            title: `Dignidades Eliminadas`,
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear Dignidad' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DignidadesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontrar Dignidades' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DignidadesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontrar Dignidad' }),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DignidadesController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar Dignidad' }),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DignidadesController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar Dignidad' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DignidadesController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar todas las Dignidades' }),
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], DignidadesController.prototype, "removeAll", null);
DignidadesController = __decorate([
    (0, common_1.Controller)('dignidades'),
    __metadata("design:paramtypes", [services_1.DignidadesService])
], DignidadesController);
exports.DignidadesController = DignidadesController;
//# sourceMappingURL=dignidades.controller.js.map