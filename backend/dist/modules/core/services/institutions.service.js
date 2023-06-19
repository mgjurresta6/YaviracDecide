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
exports.InstitutionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dto_1 = require("../dto");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let InstitutionsService = class InstitutionsService {
    constructor(institutionRepository, cataloguesService) {
        this.institutionRepository = institutionRepository;
        this.cataloguesService = cataloguesService;
    }
    async create(payload) {
        const newInstitution = this.institutionRepository.create(payload);
        newInstitution.address = await this.cataloguesService.findOne(payload.address.id);
        newInstitution.state = await this.cataloguesService.findOne(payload.state.id);
        const institutionCreated = await this.institutionRepository.save(newInstitution);
        return { data: institutionCreated };
    }
    async findAll(params) {
        if ((params === null || params === void 0 ? void 0 : params.limit) > 0 && (params === null || params === void 0 ? void 0 : params.page) >= 0) {
            return await this.paginateAndFilter(params);
        }
        const data = await this.institutionRepository.findAndCount({
            relations: ['address', 'state'],
        });
        return { data: data[0], pagination: { totalItems: data[1], limit: 10 } };
    }
    async findOne(id) {
        const institution = await this.institutionRepository.findOne({
            relations: ['address', 'state'],
            where: { id },
        });
        if (!institution)
            throw new common_1.NotFoundException('Institution not found');
        return institution;
    }
    async update(id, payload) {
        const institution = await this.institutionRepository.findOneBy({ id });
        if (!institution)
            throw new common_1.NotFoundException('Institution not found');
        institution.address = await this.cataloguesService.findOne(payload.address.id);
        institution.state = await this.cataloguesService.findOne(payload.state.id);
        this.institutionRepository.merge(institution, payload);
        const institutionUpdated = await this.institutionRepository.save(institution);
        return { data: institutionUpdated };
    }
    async remove(id) {
        const institution = await this.institutionRepository.findOneBy({ id });
        if (!institution)
            throw new common_1.NotFoundException('Institution not found');
        const institutionDeleted = await this.institutionRepository.softDelete(id);
        return { data: institutionDeleted };
    }
    async removeAll(payload) {
        const institutionsDeleted = await this.institutionRepository.softRemove(payload);
        return { data: institutionsDeleted };
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
            where.push({ acronym: (0, typeorm_1.ILike)(`%${search}`) });
            where.push({ cellphone: (0, typeorm_1.ILike)(`%${search}`) });
            where.push({ code: (0, typeorm_1.ILike)(`%${search}`) });
            where.push({ codeSniese: (0, typeorm_1.ILike)(`%${search}`) });
            where.push({ denomination: (0, typeorm_1.ILike)(`%${search}`) });
            where.push({ email: (0, typeorm_1.ILike)(`%${search}`) });
            where.push({ logo: (0, typeorm_1.ILike)(`%${search}`) });
            where.push({ name: (0, typeorm_1.ILike)(`%${search}`) });
            where.push({ phone: (0, typeorm_1.ILike)(`%${search}`) });
            where.push({ shortName: (0, typeorm_1.ILike)(`%${search}`) });
            where.push({ slogan: (0, typeorm_1.ILike)(`%${search}`) });
            where.push({ web: (0, typeorm_1.ILike)(`%${search}`) });
        }
        const response = await this.institutionRepository.findAndCount({
            relations: ['address', 'state'],
            where,
            take: limit,
            skip: dto_1.PaginationDto.getOffset(limit, page),
        });
        return {
            data: response[0],
            pagination: { limit, totalItems: response[1] },
        };
    }
};
InstitutionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.INSTITUTION_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CataloguesService])
], InstitutionsService);
exports.InstitutionsService = InstitutionsService;
//# sourceMappingURL=institutions.service.js.map