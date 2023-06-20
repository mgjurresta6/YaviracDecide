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
exports.CataloguesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dto_1 = require("@core/dto");
const enums_1 = require("../../../shared/enums");
const dto_2 = require("../../auth/dto");
const class_transformer_1 = require("class-transformer");
let CataloguesService = class CataloguesService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(payload) {
        const newCatalogue = this.repository.create(payload);
        return await this.repository.save(newCatalogue);
    }
    async catalogue(type) {
        const data = await this.repository.findAndCount({
            where: { type },
            order: { name: 1 },
            take: 1000,
        });
        return { pagination: { totalItems: data[1], limit: 1000 }, data: data[0] };
    }
    async findAll(params) {
        if (params.limit > 0 && params.page >= 0) {
            return await this.paginateAndFilter(params);
        }
        const data = await this.repository.findAndCount();
        return { data: data[0], pagination: { totalItems: data[1], limit: 10 } };
    }
    async findOne(id) {
        const catalogue = await this.repository.findOne({
            where: { id },
        });
        if (!catalogue) {
            throw new common_1.NotFoundException('Catalogue not found');
        }
        return catalogue;
    }
    async update(id, payload) {
        const catalogue = await this.repository.findOneBy({ id });
        if (!catalogue) {
            throw new common_1.NotFoundException('Catalogue not found');
        }
        this.repository.merge(catalogue, payload);
        return this.repository.save(catalogue);
    }
    async remove(id) {
        const catalogue = await this.repository.findOneBy({ id });
        if (!catalogue) {
            throw new common_1.NotFoundException('Catalogue not found');
        }
        await this.repository.softDelete(id);
        return true;
    }
    async removeAll(payload) {
        const usersDeleted = await this.repository.softRemove(payload);
        return { data: usersDeleted };
    }
    async paginateAndFilter(params) {
        let where;
        where = {};
        let { page, search } = params;
        const { limit } = params;
        if (search) {
            search = search.trim();
            page = 0;
            where = [];
            where.push({ name: (0, typeorm_1.ILike)(`%${search}%`) });
        }
        const response = await this.repository.findAndCount({
            where,
            take: limit,
            skip: dto_1.PaginationDto.getOffset(limit, page),
        });
        return {
            data: (0, class_transformer_1.plainToInstance)(dto_2.ReadUserDto, response[0]),
            pagination: { limit, totalItems: response[1] },
        };
    }
};
CataloguesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.CATALOGUE_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CataloguesService);
exports.CataloguesService = CataloguesService;
//# sourceMappingURL=catalogues.service.js.map