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
exports.InstitutionsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("../dto");
const services_1 = require("../services");
let InstitutionsController = class InstitutionsController {
    constructor(instituteService) {
        this.instituteService = instituteService;
    }
    async create(payload) {
        const serviceResponse = await this.instituteService.create(payload);
        return {
            data: serviceResponse.data,
            message: `Institution was created`,
            title: 'Institution Created',
        };
    }
    async findAll(params) {
        const serviceResponse = await this.instituteService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: `Find all institutions`,
            title: 'Success',
        };
    }
    async findOne(id) {
        const serviceResponse = await this.instituteService.findOne(id);
        return {
            data: serviceResponse.data,
            message: 'Find Institution',
            title: `Success`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.instituteService.update(id, payload);
        return {
            data: serviceResponse.data,
            message: 'Institution was updated',
            title: `Institution Updated`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.instituteService.remove(id);
        return {
            data: serviceResponse.data,
            message: 'Institution was deleted',
            title: 'Institution Deleted',
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.instituteService.removeAll(payload);
        return {
            data: serviceResponse.data,
            message: 'Institutions was deleted',
            title: 'Institutions Deleted',
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create Institution' }),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateInstitutionDto]),
    __metadata("design:returntype", Promise)
], InstitutionsController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find All Institutions' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FilterInstitutionDto]),
    __metadata("design:returntype", Promise)
], InstitutionsController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find Institution' }),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstitutionsController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Institution' }),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateInstitutionDto]),
    __metadata("design:returntype", Promise)
], InstitutionsController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Institution' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstitutionsController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete All Institutions' }),
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], InstitutionsController.prototype, "removeAll", null);
InstitutionsController = __decorate([
    (0, swagger_1.ApiTags)('Institutions'),
    (0, common_1.Controller)('institutions'),
    __metadata("design:paramtypes", [services_1.InstitutionsService])
], InstitutionsController);
exports.InstitutionsController = InstitutionsController;
//# sourceMappingURL=institutions.controller.js.map