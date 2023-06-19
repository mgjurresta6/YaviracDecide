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
const dto_1 = require("../dto");
const services_1 = require("../services");
let CronogramasController = class CronogramasController {
    constructor(cronogramasService) {
        this.cronogramasService = cronogramasService;
    }
    async create(payload) {
        const serviceResponse = await this.cronogramasService.create(payload);
        return {
            data: serviceResponse.data,
            message: 'created',
            title: 'Created',
        };
    }
    async findAll(params) {
        const serviceResponse = await this.cronogramasService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: `index`,
            title: 'Success',
        };
    }
    async findOne(id) {
        const serviceResponse = await this.cronogramasService.findOne(id);
        return {
            data: serviceResponse.data,
            message: `show ${id}`,
            title: `Success`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.cronogramasService.update(id, payload);
        return {
            data: serviceResponse.data,
            message: `Information Student  updated ${id}`,
            title: `Updated`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.cronogramasService.remove(id);
        return {
            data: serviceResponse.data,
            message: `Information Student deleted ${id}`,
            title: `Deleted`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.cronogramasService.removeAll(payload);
        return {
            data: serviceResponse.data,
            message: `Information Students deleted`,
            title: `Deleted`,
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create information students' }),
    (0, common_1.Post)(''),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CronogramasController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List of information students' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FilterInformationStudentDto]),
    __metadata("design:returntype", Promise)
], CronogramasController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'View one information students' }),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CronogramasController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update information students' }),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateInformationStudentDto]),
    __metadata("design:returntype", Promise)
], CronogramasController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remove information students' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CronogramasController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Remove All Information Students' }),
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
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