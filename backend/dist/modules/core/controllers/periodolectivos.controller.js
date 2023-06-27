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
exports.PeriodoLectivosController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
let PeriodoLectivosController = class PeriodoLectivosController {
    constructor(periodolectivosService) {
        this.periodolectivosService = periodolectivosService;
    }
    async catalogue() {
        const serviceResponse = await this.periodolectivosService.catalogue();
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: 'Catalogo Periodo',
            title: 'Catalogo',
        };
    }
    async create(payload) {
        const serviceResponse = await this.periodolectivosService.create(payload);
        return {
            data: serviceResponse.data,
            message: 'Periodo lectivo fue creada',
            title: 'Periodo lectivo Creada',
        };
    }
    async findAll(params) {
        const serviceResponse = await this.periodolectivosService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: 'Econtrar todas las Periodos lectivos',
            title: 'Exitoso',
        };
    }
    async findOne(id) {
        const serviceResponse = await this.periodolectivosService.findOne(id);
        return {
            data: serviceResponse.data,
            message: `Encontar una Periodo lectivo`,
            title: `Exitoso`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.periodolectivosService.update(id, payload);
        return {
            data: serviceResponse.data,
            message: `Periodo lectivo fue actualizada`,
            title: `Periodo lectivo Actualizada`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.periodolectivosService.remove(id);
        return {
            data: serviceResponse.data,
            message: `Periodo lectivo fue eliminada`,
            title: `Periodo lectivo Eliminada`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.periodolectivosService.removeAll(payload);
        return {
            data: serviceResponse.data,
            message: `Todos los Periodos lectivos fueron eliminadas`,
            title: ` Todos los Periodos lectivos Eliminadas`,
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Catalogo Periodos lectivos' }),
    (0, common_1.Get)('catalogue'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PeriodoLectivosController.prototype, "catalogue", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear Periodo lectivo' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PeriodoLectivosController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontrar todas las Periodos lectivos' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PeriodoLectivosController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontar una Periodo lectivo' }),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PeriodoLectivosController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar Periodo lectivo' }),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PeriodoLectivosController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar Periodo lectivo' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PeriodoLectivosController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar todas las  Periodos lectivos' }),
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], PeriodoLectivosController.prototype, "removeAll", null);
PeriodoLectivosController = __decorate([
    (0, common_1.Controller)('periodos'),
    __metadata("design:paramtypes", [services_1.PeriodoLectivosService])
], PeriodoLectivosController);
exports.PeriodoLectivosController = PeriodoLectivosController;
//# sourceMappingURL=periodolectivos.controller.js.map