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
const services_1 = require("../../core/services");
let JornadasController = class JornadasController {
    constructor(jornadasService) {
        this.jornadasService = jornadasService;
    }
    async create(payload) {
        const serviceResponse = await this.jornadasService.create(payload);
        return {
            data: serviceResponse,
            message: 'student created',
            title: 'Created',
        };
    }
    async catalogue() {
        return {
            data: { s: 'sd' },
            pagination: 'asd',
            message: `catalogue`,
            title: `Catalogue`,
        };
        const serviceResponse = await this.jornadasService.catalogue();
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: `catalogue`,
            title: `Catalogue`,
        };
    }
    async findAll(params) {
        const serviceResponse = await this.jornadasService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: `index`,
            title: `index`,
        };
    }
    async findOne(id) {
        const serviceResponse = await this.jornadasService.findOne(id);
        return {
            data: serviceResponse,
            message: `show ${id}`,
            title: `Success`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.jornadasService.update(id, payload);
        return {
            data: serviceResponse,
            message: `User updated ${id}`,
            title: `Updated`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.jornadasService.remove(id);
        return {
            data: serviceResponse,
            message: `User deleted ${id}`,
            title: `Deleted`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.jornadasService.removeAll(payload);
        return {
            data: serviceResponse,
            message: `Users deleted`,
            title: `Deleted`,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JornadasController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List all users' }),
    (0, common_1.Get)('catalogue'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JornadasController.prototype, "catalogue", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List of users' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JornadasController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JornadasController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], JornadasController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JornadasController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
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