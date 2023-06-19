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
exports.CurriculaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dto_1 = require("../dto");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let CurriculaService = class CurriculaService {
    constructor(curriculumRepository, careerService, institutionsService, catalogueService) {
        this.curriculumRepository = curriculumRepository;
        this.careerService = careerService;
        this.institutionsService = institutionsService;
        this.catalogueService = catalogueService;
    }
    async create(payload) {
        const newCurriculum = this.curriculumRepository.create(payload);
        newCurriculum.career = await this.careerService.findOne(payload.career.id);
        newCurriculum.state = await this.catalogueService.findOne(payload.state.id);
        const curriculumCreated = await this.curriculumRepository.save(newCurriculum);
        return {
            data: curriculumCreated,
        };
    }
    async findAll(params) {
        if (params.limit && params.page)
            return await this.paginateAndFilter(params);
        if (params.weeksNumber)
            return await this.filterByWeeksNumber(params.weeksNumber);
        const data = await this.curriculumRepository.findAndCount({
            relations: ['career', 'state'],
        });
        return { data: data[0], pagination: { totalItems: data[1], limit: 10 } };
    }
    async findOne(id) {
        const curriculum = await this.curriculumRepository.findOne({
            relations: ['career', 'state'],
            where: {
                id,
            },
        });
        if (!curriculum) {
            throw new common_1.NotFoundException('El producto no se encontro');
        }
        return curriculum;
    }
    async update(id, payload) {
        const curriculum = await this.curriculumRepository.findOne({
            relations: ['career', 'state'],
            where: {
                id,
            },
        });
        if (!curriculum) {
            throw new common_1.NotFoundException('El producto no se encontro');
        }
        curriculum.career = await this.careerService.findOne(payload.career.id);
        curriculum.state = await this.catalogueService.findOne(payload.state.id);
        this.curriculumRepository.merge(curriculum, payload);
        const curriculumUpdated = await this.curriculumRepository.save(curriculum);
        return {
            data: curriculumUpdated,
        };
    }
    async remove(id) {
        const curriculum = await this.curriculumRepository.findOne({
            relations: ['career', 'state'],
            where: {
                id,
            },
        });
        if (!curriculum) {
            throw new common_1.NotFoundException('El producto no se encontro');
        }
        const curriculumDeleted = await this.curriculumRepository.softDelete(id);
        return {
            data: curriculumDeleted,
        };
    }
    async removeAll(payload) {
        const curriculaDeleted = await this.curriculumRepository.softRemove(payload);
        return { data: curriculaDeleted };
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
            where.push({ description: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ name: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ resolutionNumber: (0, typeorm_1.ILike)(`%${search}%`) });
        }
        const response = await this.curriculumRepository.findAndCount({
            relations: ['career', 'state'],
            where,
            take: limit,
            skip: dto_1.PaginationDto.getOffset(limit, page),
        });
        return {
            data: response[0],
            pagination: { limit, totalItems: response[1] },
        };
    }
    async filterByWeeksNumber(weeksNumber) {
        const where = {};
        if (weeksNumber) {
            where.weeksNumber = (0, typeorm_1.LessThan)(weeksNumber);
        }
        const response = await this.curriculumRepository.findAndCount({
            relations: ['career', 'state'],
            where,
        });
        return {
            data: response[0],
            pagination: { limit: 10, totalItems: response[1] },
        };
    }
};
CurriculaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.CURRICULUM_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CareersService,
        services_1.InstitutionsService,
        services_1.CataloguesService])
], CurriculaService);
exports.CurriculaService = CurriculaService;
//# sourceMappingURL=curricula.service.js.map