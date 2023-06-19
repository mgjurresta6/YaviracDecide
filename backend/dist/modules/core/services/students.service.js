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
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dto_1 = require("../dto");
const enums_1 = require("../../../shared/enums");
let StudentsService = class StudentsService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(payload) {
        const newStudent = this.repository.create(payload);
        const studentCreated = await this.repository.save(newStudent);
        return await this.repository.save(studentCreated);
    }
    async catalogue() {
        const data = await this.repository.findAndCount({
            take: 1000,
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findAll(params) {
        if (params) {
            return await this.paginateAndFilter(params);
        }
        const data = await this.repository.findAndCount();
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const student = await this.repository.findOne({
            where: { id },
        });
        if (!student) {
            throw new common_1.NotFoundException('Student not found');
        }
        return student;
    }
    async update(id, payload) {
        const student = await this.repository.findOneBy({ id });
        if (!student) {
            throw new common_1.NotFoundException('Student not found');
        }
        this.repository.merge(student, payload);
        return this.repository.save(student);
    }
    async remove(id) {
        const student = await this.repository.findOneBy({ id });
        if (!student) {
            throw new common_1.NotFoundException('Student not found');
        }
        return await this.repository.softRemove(student);
    }
    async removeAll(payload) {
        return this.repository.softRemove(payload);
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
        const data = await this.repository.findAndCount({
            relations: ['bloodType', 'gender'],
            where,
            take: limit,
            skip: dto_1.PaginationDto.getOffset(limit, page),
        });
        return { pagination: { limit, totalItems: data[1] }, data: data[0] };
    }
};
StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.STUDENT_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], StudentsService);
exports.StudentsService = StudentsService;
//# sourceMappingURL=students.service.js.map