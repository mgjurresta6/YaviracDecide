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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CataloguesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_1 = require("../services");
const dto_1 = require("@core/dto");
const enums_1 = require("../../../shared/enums");
let CataloguesController = class CataloguesController {
    constructor(catalogueService) {
        this.catalogueService = catalogueService;
    }
    async create(payload) {
        const data = await this.catalogueService.create(payload);
        return {
            data,
            message: 'created',
        };
    }
    async catalogue(type) {
        const response = await this.catalogueService.catalogue(type);
        return {
            data: response.data,
            message: `catalogue`,
            title: `Catalogue`,
        };
    }
    async findAll(params) {
        const response = await this.catalogueService.findAll(params);
        return {
            data: response.data,
            pagination: response.pagination,
            message: `index`,
        };
    }
    async findOne(id) {
        const data = await this.catalogueService.findOne(id);
        return {
            data,
            message: `show ${id}`,
            title: `Success`,
        };
    }
    async update(id, payload) {
        const data = await this.catalogueService.update(id, payload);
        return {
            data: data,
            message: `Catalogue updated ${id}`,
            title: `Updated`,
        };
    }
    async remove(id) {
        const data = await this.catalogueService.remove(id);
        return {
            data,
            message: `Catalogue deleted ${id}`,
            title: `Deleted`,
        };
    }
    async removeAll(payload) {
        const data = await this.catalogueService.removeAll(payload);
        return {
            data,
            message: `Catalogues deleted`,
            title: `Deleted`,
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreateCatalogueDto !== "undefined" && dto_1.CreateCatalogueDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], CataloguesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List all catalogues' }),
    (0, common_1.Get)('catalogue'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CataloguesController.prototype, "catalogue", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List of catalogues' }),
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.FilterCatalogueDto !== "undefined" && dto_1.FilterCatalogueDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], CataloguesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CataloguesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_d = typeof dto_1.UpdateCatalogueDto !== "undefined" && dto_1.UpdateCatalogueDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], CataloguesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CataloguesController.prototype, "remove", null);
__decorate([
    (0, common_1.Patch)('remove-all'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CataloguesController.prototype, "removeAll", null);
CataloguesController = __decorate([
    (0, swagger_1.ApiTags)('catalogues'),
    (0, common_1.Controller)('catalogues'),
    __metadata("design:paramtypes", [typeof (_a = typeof services_1.CataloguesService !== "undefined" && services_1.CataloguesService) === "function" ? _a : Object])
], CataloguesController);
exports.CataloguesController = CataloguesController;
//# sourceMappingURL=catalogues.controller.js.map