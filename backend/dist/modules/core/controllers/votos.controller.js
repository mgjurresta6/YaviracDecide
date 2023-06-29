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
exports.VotosController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
let VotosController = class VotosController {
    constructor(votosService) {
        this.votosService = votosService;
    }
    async catalogue() {
        const serviceResponse = await this.votosService.catalogue();
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: `Catalogo Votos`,
            title: `Catalogo`,
        };
    }
    async create(payload) {
        const serviceResponse = await this.votosService.create(payload);
        return {
            data: serviceResponse.data,
            message: 'Voto fue creada',
            title: 'Voto Creada',
        };
    }
    async findAll(params) {
        const serviceResponse = await this.votosService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: 'Econtrar todas las Votos',
            title: 'Exitoso',
        };
    }
    async findOne(id) {
        const serviceResponse = await this.votosService.findOne(id);
        return {
            data: serviceResponse.data,
            message: `Encontar una Voto`,
            title: `Exitoso`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.votosService.update(id, payload);
        return {
            data: serviceResponse.data,
            message: `Voto fue actualizada`,
            title: `Voto Actualizada`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.votosService.remove(id);
        return {
            data: serviceResponse.data,
            message: `Voto fue eliminada`,
            title: `Voto Eliminada`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.votosService.removeAll(payload);
        return {
            data: serviceResponse.data,
            message: `Votos fueron eliminadas`,
            title: `Votos Eliminadas`,
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Catalogo Votos' }),
    (0, common_1.Get)('catalogue'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VotosController.prototype, "catalogue", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear Voto' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VotosController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontrar todas las Votos' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VotosController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Encontar una Voto' }),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VotosController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar Voto' }),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], VotosController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar Voto' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VotosController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Borrar todas las  Votos' }),
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], VotosController.prototype, "removeAll", null);
VotosController = __decorate([
    (0, common_1.Controller)('votos'),
    __metadata("design:paramtypes", [services_1.VotosService])
], VotosController);
exports.VotosController = VotosController;
//# sourceMappingURL=votos.controller.js.map