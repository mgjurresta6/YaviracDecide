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
exports.InformationStudentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dto_1 = require("../dto");
const catalogues_service_1 = require("./catalogues.service");
const enums_1 = require("../../../shared/enums");
let InformationStudentsService = class InformationStudentsService {
    constructor(informationStudentRepository, cataloguesService) {
        this.informationStudentRepository = informationStudentRepository;
        this.cataloguesService = cataloguesService;
    }
    async create(payload) {
        const newInformationStudent = this.informationStudentRepository.create(payload);
        this.informationStudentRepository.create(payload);
        newInformationStudent.isExecutedPractice =
            await this.cataloguesService.findOne(payload.isExecutedPractice.id);
        newInformationStudent.isExecutedCommunity =
            await this.cataloguesService.findOne(payload.isExecutedCommunity.id);
        newInformationStudent.isDisability = await this.cataloguesService.findOne(payload.isDisability.id);
        newInformationStudent.isLostGratuity = await this.cataloguesService.findOne(payload.isLostGratuity.id);
        newInformationStudent.isDisability = await this.cataloguesService.findOne(payload.isDisability.id);
        newInformationStudent.isSubjectRepeat =
            await this.cataloguesService.findOne(payload.isSubjectRepeat.id);
        const informationStudentCreated = await this.informationStudentRepository.save(newInformationStudent);
        return { data: informationStudentCreated };
    }
    async findAll(params) {
        if (params) {
            return await this.paginateAndFilter(params);
        }
        if (params.community) {
            return this.filterByCommunity(params.community);
        }
        const data = await this.informationStudentRepository.findAndCount({
            relations: [
                'isAncestralLanguage',
                'isBonusDevelopmentReceive',
                'isDegreeSuperior',
                'isDisability',
                'isSubjectRepeat',
            ],
        });
        return { data: data[0], pagination: { totalItems: data[1], limit: 10 } };
    }
    async findOne(id) {
        const informationStudent = await this.informationStudentRepository.findOne({
            relations: [
                'isAncestralLanguage',
                'isBonusDevelopmentReceive',
                'isDegreeSuperior',
                'isDisability',
                'isSubjectRepeat',
            ],
            where: { id },
        });
        if (informationStudent === null) {
            throw new common_1.NotFoundException('La informacion no se encontro');
        }
        return { data: informationStudent };
    }
    async update(id, payload) {
        const informationStudent = await this.informationStudentRepository.findOneBy({ id });
        if (informationStudent === null) {
            throw new common_1.NotFoundException('La informacion del estudiante no se encontro');
        }
        informationStudent.isExecutedPractice =
            await this.cataloguesService.findOne(payload.isExecutedPractice.id);
        informationStudent.isExecutedCommunity =
            await this.cataloguesService.findOne(payload.isExecutedCommunity.id);
        informationStudent.isDisability = await this.cataloguesService.findOne(payload.isDisability.id);
        informationStudent.isLostGratuity = await this.cataloguesService.findOne(payload.isLostGratuity.id);
        informationStudent.isDisability = await this.cataloguesService.findOne(payload.isDisability.id);
        informationStudent.isSubjectRepeat = await this.cataloguesService.findOne(payload.isSubjectRepeat.id);
        this.informationStudentRepository.merge(informationStudent, payload);
        const informationStudentUpdated = await this.informationStudentRepository.save(informationStudent);
        return { data: informationStudentUpdated };
    }
    async remove(id) {
        const informationStudent = await this.informationStudentRepository.findOneBy({ id });
        if (!informationStudent) {
            throw new common_1.NotFoundException('Information Student not found');
        }
        const informationStudentDeleted = await this.informationStudentRepository.save(informationStudent);
        return { data: informationStudentDeleted };
    }
    async removeAll(payload) {
        const informationStudentsDeleted = await this.informationStudentRepository.softRemove(payload);
        return { data: informationStudentsDeleted };
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
            where.push({ address: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ contactEmergencyName: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ contactEmergencyKinship: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ contactEmergencyPhone: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ postalCode: (0, typeorm_1.ILike)(`%${search}%`) });
        }
        const response = await this.informationStudentRepository.findAndCount({
            relations: [
                'isAncestralLanguage',
                'isBonusDevelopmentReceive',
                'isDegreeSuperior',
                'isDisability',
                'isSubjectRepeat',
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
    async filterByCommunity(community) {
        const where = {};
        if (community) {
            where.community = (0, typeorm_1.LessThan)(community);
        }
        const response = await this.informationStudentRepository.findAndCount({
            relations: [
                'isAncestralLanguage',
                'isBonusDevelopmentReceive',
                'isDegreeSuperior',
                'isDisability',
                'isSubjectRepeat',
            ],
            where,
        });
        return {
            data: response[0],
            pagination: { limit: 10, totalItems: response[1] },
        };
    }
};
InformationStudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.INFORMATION_STUDENT_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        catalogues_service_1.CataloguesService])
], InformationStudentsService);
exports.InformationStudentsService = InformationStudentsService;
//# sourceMappingURL=information-students.service.js.map