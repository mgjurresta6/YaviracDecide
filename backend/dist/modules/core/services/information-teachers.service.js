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
exports.InformationTeachersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dto_1 = require("../dto");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let InformationTeachersService = class InformationTeachersService {
    constructor(InformationTeacherRepository, catalogueService) {
        this.InformationTeacherRepository = InformationTeacherRepository;
        this.catalogueService = catalogueService;
    }
    async create(payload) {
        const newInformationTeacher = this.InformationTeacherRepository.create(payload);
        newInformationTeacher.countryHigherEducation =
            await this.catalogueService.findOne(payload.countryHigherEducation.id);
        newInformationTeacher.dedicationTime = await this.catalogueService.findOne(payload.dedicationTime.id);
        newInformationTeacher.financingType = await this.catalogueService.findOne(payload.financingType.id);
        newInformationTeacher.higherEducation = await this.catalogueService.findOne(payload.higherEducation.id);
        newInformationTeacher.scholarship = await this.catalogueService.findOne(payload.scholarship.id);
        newInformationTeacher.scholarshipType = await this.catalogueService.findOne(payload.scholarshipType.id);
        newInformationTeacher.teachingLadder = await this.catalogueService.findOne(payload.teachingLadder.id);
        const informationTeacherCreated = await this.InformationTeacherRepository.save(newInformationTeacher);
        return { data: informationTeacherCreated };
    }
    async findAll(params) {
        if (params.limit && params.page) {
            return await this.paginateAndFilter(params);
        }
        if (params.holidays) {
            return this.filterByHolidays(params.holidays);
        }
        const data = await this.InformationTeacherRepository.findAndCount({
            relations: [
                'countryHigherEducation',
                'dedicationTime',
                'financingType',
                'higherEducation',
                'scholarship',
                'scholarshipType',
                'teachingLadder',
                'username',
            ],
        });
        return { data: data[0], pagination: { totalItems: data[1], limit: 10 } };
    }
    async findOne(id) {
        const informationTeacher = await this.InformationTeacherRepository.findOne({
            relations: [
                'countryHigherEducation',
                'dedicationTime',
                'financingType',
                'higherEducation',
                'scholarship',
                'scholarshipType',
                'teachingLadder',
                'username',
            ],
            where: { id },
        });
        if (!informationTeacher) {
            throw new common_1.NotFoundException('InformationTeacher not found');
        }
        return { data: informationTeacher };
    }
    async update(id, payload) {
        const informationTeacher = await this.InformationTeacherRepository.findOneBy({ id });
        if (!informationTeacher) {
            throw new common_1.NotFoundException('Information teacher not found');
        }
        informationTeacher.countryHigherEducation =
            await this.catalogueService.findOne(payload.countryHigherEducation.id);
        informationTeacher.dedicationTime = await this.catalogueService.findOne(payload.dedicationTime.id);
        informationTeacher.financingType = await this.catalogueService.findOne(payload.financingType.id);
        informationTeacher.higherEducation = await this.catalogueService.findOne(payload.higherEducation.id);
        informationTeacher.scholarship = await this.catalogueService.findOne(payload.scholarship.id);
        informationTeacher.scholarshipType = await this.catalogueService.findOne(payload.scholarshipType.id);
        informationTeacher.teachingLadder = await this.catalogueService.findOne(payload.teachingLadder.id);
        this.InformationTeacherRepository.merge(informationTeacher, payload);
        const informationTeacherUpdated = await this.InformationTeacherRepository.save(informationTeacher);
        return { data: informationTeacherUpdated };
    }
    async remove(id) {
        const informationTeacher = await this.InformationTeacherRepository.findOneBy({ id });
        if (!informationTeacher) {
            throw new common_1.NotFoundException('information teacher not found');
        }
        const informationTeacherDeleted = await this.InformationTeacherRepository.save(informationTeacher);
        return { data: informationTeacherDeleted };
    }
    async removeAll(payload) {
        const informationTeachersDeleted = await this.InformationTeacherRepository.softRemove(payload);
        return { data: informationTeachersDeleted };
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
            where.push({ academicUnit: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ degreeHigherEducation: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ institutionHigherEducation: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ otherHours: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ technical: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ technology: (0, typeorm_1.ILike)(`%${search}%`) });
        }
        const response = await this.InformationTeacherRepository.findAndCount({
            relations: [
                'countryHigherEducation',
                'dedicationTime',
                'financingType',
                'higherEducation',
                'scholarship',
                'scholarshipType',
                'teachingLadder',
                'username',
            ],
            where,
            take: limit,
            skip: dto_1.PaginationDto.getOffset(limit, page),
        });
        return {
            data: response[0],
            pagination: { limit, totalItems: response[1] },
        };
    }
    async filterByHolidays(holidays) {
        const where = {};
        if (holidays) {
            where.holidays = (0, typeorm_1.LessThan)(holidays);
        }
        const response = await this.InformationTeacherRepository.findAndCount({
            relations: [
                'countryHigherEducation',
                'dedicationTime',
                'financingType',
                'higherEducation',
                'scholarship',
                'scholarshipType',
                'teachingLadder',
                'username',
            ],
            where,
        });
        return {
            data: response[0],
            pagination: { limit: 10, totalItems: response[1] },
        };
    }
};
InformationTeachersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.INFORMATION_TEACHER_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CataloguesService])
], InformationTeachersService);
exports.InformationTeachersService = InformationTeachersService;
//# sourceMappingURL=information-teachers.service.js.map