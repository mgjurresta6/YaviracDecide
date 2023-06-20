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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursosController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("@core/dto");
const services_1 = require("../../core/services");
let CursosController = class CursosController {
    constructor(cursosService) {
        this.cursosService = cursosService;
    }
    async create(payload) {
        const serviceResponse = await this.cursosService.create(payload);
        return {
            data: serviceResponse.data,
            message: 'Information Teacher Created',
            title: 'Information Teacher Created',
        };
    }
    async findAll(params) {
        const serviceResponse = await this.cursosService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: 'Find All Information Teachers',
            title: 'Success',
        };
    }
    async findOne(id) {
        const serviceResponse = await this.cursosService.findOne(id);
        return {
            data: serviceResponse.data,
            message: 'FInd Information Teacher',
            title: `Success`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.cursosService.update(id, payload);
        return {
            data: serviceResponse.data,
            message: 'The information teacher was updated',
            title: `Information Teacher Updated`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.cursosService.remove(id);
        return {
            data: serviceResponse.data,
            message: `The information teacher was deleted`,
            title: `Information Teacher Deleted`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.cursosService.removeAll(payload);
        return {
            data: serviceResponse.data,
            message: `The information teachers was deleted`,
            title: `Information Teachers Deleted`,
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create Information Teacher' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof dto_1.CreateInformationTeacherDto !== "undefined" && dto_1.CreateInformationTeacherDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find All Information Teachers' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.FilterInformationTeacherDto !== "undefined" && dto_1.FilterInformationTeacherDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find Information Teacher' }),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Information Teacher' }),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_c = typeof dto_1.UpdateInformationTeacherDto !== "undefined" && dto_1.UpdateInformationTeacherDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Information Teacher' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete All Information Teachers' }),
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CursosController.prototype, "removeAll", null);
CursosController = __decorate([
    (0, common_1.Controller)('cursos'),
    __metadata("design:paramtypes", [services_1.CursosService])
], CursosController);
exports.CursosController = CursosController;
//# sourceMappingURL=cursos.controller.js.map