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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const dto_1 = require("../dto");
const dto_2 = require("../../core/dto");
const enums_1 = require("../../../shared/enums");
const constants_1 = require("../constants");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(payload) {
        const newUser = this.userRepository.create(payload);
        const userCreated = await this.userRepository.save(newUser);
        return { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, userCreated) };
    }
    async catalogue() {
        const response = await this.userRepository.findAndCount({ take: 1000 });
        return {
            data: response[0],
            pagination: { totalItems: response[1], limit: 10 },
        };
    }
    async findAll(params) {
        if ((params === null || params === void 0 ? void 0 : params.limit) > 0 && (params === null || params === void 0 ? void 0 : params.page) >= 0) {
            return await this.paginateAndFilter(params);
        }
        if (params.birthdate) {
            return this.filterByBirthdate(params.birthdate);
        }
        const response = await this.userRepository.findAndCount({
            order: { updatedAt: 'DESC' },
        });
        return {
            data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, response[0]),
            pagination: { totalItems: response[1], limit: 10 },
        };
    }
    async findOne(id) {
        const user = await this.userRepository.findOne({
            where: { id },
            select: { password: false },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, user) };
    }
    async update(id, payload) {
        const user = await this.userRepository.preload(Object.assign({ id }, payload));
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const userUpdated = await this.userRepository.save(user);
        return { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, userUpdated) };
    }
    async reactivate(id) {
        const user = (await this.findOne(id)).data;
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        user.suspendedAt = null;
        user.maxAttempts = constants_1.MAX_ATTEMPTS;
        const userUpdated = await this.userRepository.save(user);
        return { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, userUpdated) };
    }
    async remove(id) {
        const user = await this.userRepository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const userDeleted = await this.userRepository.softRemove(user);
        return { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, userDeleted) };
    }
    async removeAll(payload) {
        const usersDeleted = await this.userRepository.softRemove(payload);
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
            where.push({ identification: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ lastname: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ name: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ username: (0, typeorm_1.ILike)(`%${search}%`) });
        }
        const response = await this.userRepository.findAndCount({
            where,
            take: limit,
            skip: dto_2.PaginationDto.getOffset(limit, page),
            order: {
                updatedAt: 'DESC',
            },
        });
        return {
            data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, response[0]),
            pagination: { limit, totalItems: response[1] },
        };
    }
    async filterByBirthdate(birthdate) {
        const where = {};
        if (birthdate) {
            where.birthdate = (0, typeorm_1.LessThan)(birthdate);
        }
        const response = await this.userRepository.findAndCount({ where });
        return {
            data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, response[0]),
            pagination: { limit: 10, totalItems: response[1] },
        };
    }
    async suspend(id) {
        const user = (await this.findOne(id)).data;
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        user.suspendedAt = new Date();
        const userUpdated = await this.userRepository.save(user);
        return { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, userUpdated) };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.USER_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map