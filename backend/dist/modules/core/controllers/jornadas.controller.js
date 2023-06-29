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
exports.JornadasController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
let JornadasController = class JornadasController {
    constructor(jornadasService) {
        this.jornadasService = jornadasService;
    }
    async create(payload) {
        const serviceResponse = await this.jornadasService.create(payload);
        return {
            data: serviceResponse,
            message: 'Jornada fue creada',
            title: 'Jornada Creada',
        };
    }
    async catalogue() {
        return {
            data: { s: 'sd' },
            pagination: 'asd',
            message: `catalogo Jornadas`,
            title: `Catalogue`,
        };
        const serviceResponse = await this.jornadasService.catalogue();
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: 'Econtrar todas las Jornadas',
            title: 'Exitoso',
        };
    }
    async findAll(params) {
        const serviceResponse = await this.jornadasService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: `Encontar una Jornada`,
            title: `Exitoso`,
        };
    }
    async findOne(id) {
        const serviceResponse = await this.jornadasService.findOne(id);
        return {
            data: serviceResponse,
            message: `Jornada fue actualizada`,
            title: `Jornada Actualizada`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.jornadasService.update(id, payload);
        return {
            data: serviceResponse,
            message: `Jornada fue eliminada`,
            title: `Jornada Eliminada`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.jornadasService.remove(id);
        return {
            data: serviceResponse,
            message: `Jornadas fueron eliminadas`,
            title: `Jornadas Eliminadas`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.jornadasService.removeAll(payload);
        return {
            data: serviceResponse,
            message: `Jornadas fueron eliminadas`,
            title: `Jornadas Eliminadas`,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JornadasController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Catalogo Jornadas' }),
    (0, common_1.Get)('catalogue'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JornadasController.prototype, "catalogue", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontrar Jornada' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JornadasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JornadasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], JornadasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JornadasController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], JornadasController.prototype, "removeAll", null);
JornadasController = __decorate([
    (0, common_1.Controller)('jornadas'),
    __metadata("design:paramtypes", [services_1.JornadasService])
], JornadasController);
exports.JornadasController = JornadasController;
//# sourceMappingURL=jornadas.controller.js.map