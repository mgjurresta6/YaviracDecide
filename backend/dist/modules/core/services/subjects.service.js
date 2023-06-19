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
exports.SubjectsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dto_1 = require("../dto");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let SubjectsService = class SubjectsService {
    constructor(subjectRepository, catalogueService, curriculumService) {
        this.subjectRepository = subjectRepository;
        this.catalogueService = catalogueService;
        this.curriculumService = curriculumService;
    }
    async create(payload) {
        const newSubject = this.subjectRepository.create(payload);
        newSubject.academicPeriod = await this.catalogueService.findOne(payload.academicPeriod.id);
        newSubject.state = await this.catalogueService.findOne(payload.state.id);
        newSubject.type = await this.catalogueService.findOne(payload.type.id);
        newSubject.curriculum = await this.curriculumService.findOne(payload.curriculum.id);
        const subjectCreated = await this.subjectRepository.save(newSubject);
        return { data: subjectCreated };
    }
    async findAll(params) {
        if ((params === null || params === void 0 ? void 0 : params.limit) > 0 && (params === null || params === void 0 ? void 0 : params.page) >= 0) {
            return await this.paginateAndFilter(params);
        }
        if (params.autonomousHour) {
            return this.filterByAutonomousHour(params.autonomousHour);
        }
        const data = await this.subjectRepository.findAndCount({
            relations: ['academicPeriod', 'curriculum', 'state', 'type'],
        });
        return { data: data[0], pagination: { totalItems: data[1], limit: 10 } };
    }
    async findOne(id) {
        const subject = await this.subjectRepository.findOne({
            relations: ['academicPeriod', 'curriculum', 'state', 'type'],
            where: { id },
        });
        if (!subject) {
            throw new common_1.NotFoundException('Subject not found');
        }
        return { data: subject };
    }
    async update(id, payload) {
        const subject = await this.subjectRepository.findOneBy({ id });
        if (!subject) {
            throw new common_1.NotFoundException('Subject not found');
        }
        subject.academicPeriod = await this.catalogueService.findOne(payload.academicPeriod.id);
        subject.state = await this.catalogueService.findOne(payload.state.id);
        subject.type = await this.catalogueService.findOne(payload.type.id);
        subject.curriculum = await this.curriculumService.findOne(payload.curriculum.id);
        this.subjectRepository.merge(subject, payload);
        const subjectUpdated = await this.subjectRepository.save(subject);
        return { data: subjectUpdated };
    }
    async remove(id) {
        const subject = await this.subjectRepository.findOneBy({ id });
        if (!subject) {
            throw new common_1.NotFoundException('Subject not found');
        }
        const subjectDeleted = await this.subjectRepository.save(subject);
        return { data: subjectDeleted };
    }
    async removeAll(payload) {
        const subjectsDeleted = await this.subjectRepository.softRemove(payload);
        return { data: subjectsDeleted };
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
            where.push({ code: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ name: (0, typeorm_1.ILike)(`%${search}%`) });
        }
        const response = await this.subjectRepository.findAndCount({
            relations: ['academicPeriod', 'curriculum', 'state', 'type'],
            where,
            take: limit,
            skip: dto_1.PaginationDto.getOffset(limit, page),
        });
        return {
            data: response[0],
            pagination: { limit, totalItems: response[1] },
        };
    }
    async filterByAutonomousHour(autonomousHour) {
        const where = {};
        if (autonomousHour) {
            where.autonomousHour = (0, typeorm_1.LessThan)(autonomousHour);
        }
        const response = await this.subjectRepository.findAndCount({
            relations: ['academicPeriod', 'curriculum', 'state', 'type'],
            where,
        });
        return {
            data: response[0],
            pagination: { limit: 10, totalItems: response[1] },
        };
    }
};
SubjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.SUBJECT_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CataloguesService,
        services_1.CurriculaService])
], SubjectsService);
exports.SubjectsService = SubjectsService;
//# sourceMappingURL=subjects.service.js.map