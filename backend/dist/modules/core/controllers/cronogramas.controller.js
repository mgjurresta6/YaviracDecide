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
exports.CronogramasController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
let CronogramasController = class CronogramasController {
    constructor(cronogramasService) {
        this.cronogramasService = cronogramasService;
    }
    async create(payload) {
        const serviceResponse = await this.cronogramasService.create(payload);
        return {
            data: serviceResponse.data,
            message: 'Cronograma fue creada',
            title: 'Cronograma Creada',
        };
    }
    async findAll(params) {
        const serviceResponse = await this.cronogramasService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: 'Econtrar todas las Cronogramas',
            title: 'Exitoso',
        };
    }
    async findOne(id) {
        const serviceResponse = await this.cronogramasService.findOne(id);
        return {
            data: serviceResponse.data,
            message: `Encontar un Cronograma`,
            title: `Exitoso`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.cronogramasService.update(id, payload);
        return {
            data: serviceResponse.data,
            message: `Cronograma fue actualizada`,
            title: `Cronograma Actualizada`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.cronogramasService.remove(id);
        return {
            data: serviceResponse.data,
            message: `Cronograma fue eliminada`,
            title: `Cronograma Eliminada`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.cronogramasService.removeAll(payload);
        return {
            data: serviceResponse.data,
            message: `Cronogramas fueron eliminadas`,
            title: `Cronogramas Eliminadas`,
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear Cronograma' }),
    (0, common_1.Post)(''),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CronogramasController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CronogramasController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontrar Cronograma' }),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CronogramasController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar Cronograma' }),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CronogramasController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar Cronograma' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CronogramasController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar todos los Cronogramas' }),
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CronogramasController.prototype, "removeAll", null);
CronogramasController = __decorate([
    (0, common_1.Controller)('cronogramas'),
    __metadata("design:paramtypes", [services_1.CronogramasService])
], CronogramasController);
exports.CronogramasController = CronogramasController;
//# sourceMappingURL=cronogramas.controller.js.map