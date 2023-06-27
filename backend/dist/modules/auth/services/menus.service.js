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
exports.MenusService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const dto_1 = require("../../core/dto");
const enums_1 = require("../../../shared/enums");
const dto_2 = require("../dto");
let MenusService = class MenusService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(payload) {
        const newMenu = this.repository.create(payload);
        const menuCreated = await this.repository.save(newMenu);
        return { data: (0, class_transformer_1.plainToInstance)(dto_2.ReadMenuDto, menuCreated) };
    }
    async catalogue() {
        const response = await this.repository.findAndCount({ take: 1000 });
        return {
            data: response[0],
            pagination: { totalItems: response[1], limit: 10 },
        };
    }
    async getMenusForSidebar() {
        let response = await this.repository.find({
            where: { parent: (0, typeorm_1.IsNull)() },
            relations: { children: true, parent: true },
        });
        response = response.filter((element) => element.parent === null);
        return {
            data: response,
        };
    }
    async findAll(params) {
        if ((params === null || params === void 0 ? void 0 : params.limit) > 0 && (params === null || params === void 0 ? void 0 : params.page) >= 0) {
            return await this.paginateAndFilter(params);
        }
        const response = await this.repository.findAndCount({
            order: { updatedAt: 'DESC' },
        });
        return {
            data: (0, class_transformer_1.plainToInstance)(dto_2.ReadMenuDto, response[0]),
            pagination: { totalItems: response[1], limit: 10 },
        };
    }
    async findOne(id) {
        const menu = await this.repository.findOneBy({ id });
        if (!menu) {
            throw new common_1.NotFoundException('Menu not found');
        }
        return { data: (0, class_transformer_1.plainToInstance)(dto_2.ReadMenuDto, menu) };
    }
    async update(id, payload) {
        const menu = await this.repository.preload(Object.assign({ id }, payload));
        if (!menu) {
            throw new common_1.NotFoundException('Menu not found');
        }
        const menuUpdated = await this.repository.save(menu);
        return { data: (0, class_transformer_1.plainToInstance)(dto_2.ReadMenuDto, menuUpdated) };
    }
    async remove(id) {
        const menu = await this.repository.findOneBy({ id });
        if (!menu) {
            throw new common_1.NotFoundException('Menu not found');
        }
        const menuDeleted = await this.repository.softRemove(menu);
        return { data: (0, class_transformer_1.plainToInstance)(dto_2.ReadMenuDto, menuDeleted) };
    }
    async removeAll(payload) {
        const menusDeleted = await this.repository.softRemove(payload);
        return { data: menusDeleted };
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
            where.push({ label: (0, typeorm_1.ILike)(`%${search}%`) });
        }
        const response = await this.repository.findAndCount({
            where,
            take: limit,
            skip: dto_1.PaginationDto.getOffset(limit, page),
            order: {
                updatedAt: 'DESC',
            },
        });
        return {
            data: (0, class_transformer_1.plainToInstance)(dto_2.ReadMenuDto, response[0]),
            pagination: { limit, totalItems: response[1] },
        };
    }
};
MenusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.MENU_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], MenusService);
exports.MenusService = MenusService;
//# sourceMappingURL=menus.service.js.map