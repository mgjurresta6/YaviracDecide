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
exports.InformationTeachersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("../dto");
const services_1 = require("../services");
let InformationTeachersController = class InformationTeachersController {
    constructor(informationTeachersService) {
        this.informationTeachersService = informationTeachersService;
    }
    async create(payload) {
        const serviceResponse = await this.informationTeachersService.create(payload);
        return {
            data: serviceResponse.data,
            message: 'Information Teacher Created',
            title: 'Information Teacher Created',
        };
    }
    async findAll(params) {
        const serviceResponse = await this.informationTeachersService.findAll(params);
        return {
            data: serviceResponse.data,
            pagination: serviceResponse.pagination,
            message: 'Find All Information Teachers',
            title: 'Success',
        };
    }
    async findOne(id) {
        const serviceResponse = await this.informationTeachersService.findOne(id);
        return {
            data: serviceResponse.data,
            message: 'FInd Information Teacher',
            title: `Success`,
        };
    }
    async update(id, payload) {
        const serviceResponse = await this.informationTeachersService.update(id, payload);
        return {
            data: serviceResponse.data,
            message: 'The information teacher was updated',
            title: `Information Teacher Updated`,
        };
    }
    async remove(id) {
        const serviceResponse = await this.informationTeachersService.remove(id);
        return {
            data: serviceResponse.data,
            message: `The information teacher was deleted`,
            title: `Information Teacher Deleted`,
        };
    }
    async removeAll(payload) {
        const serviceResponse = await this.informationTeachersService.removeAll(payload);
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
    __metadata("design:paramtypes", [dto_1.CreateInformationTeacherDto]),
    __metadata("design:returntype", Promise)
], InformationTeachersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find All Information Teachers' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FilterInformationTeacherDto]),
    __metadata("design:returntype", Promise)
], InformationTeachersController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find Information Teacher' }),
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InformationTeachersController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Information Teacher' }),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateInformationTeacherDto]),
    __metadata("design:returntype", Promise)
], InformationTeachersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete Information Teacher' }),
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InformationTeachersController.prototype, "remove", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete All Information Teachers' }),
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], InformationTeachersController.prototype, "removeAll", null);
InformationTeachersController = __decorate([
    (0, swagger_1.ApiTags)('Information Teachers'),
    (0, common_1.Controller)('information-teachers'),
    __metadata("design:paramtypes", [services_1.InformationTeachersService])
], InformationTeachersController);
exports.InformationTeachersController = InformationTeachersController;
//# sourceMappingURL=information-teachers.controller.js.map