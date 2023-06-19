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
exports.CareersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const dto_1 = require("../dto");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let CareersService = class CareersService {
    constructor(careerRepository, institutionService, cataloguesService) {
        this.careerRepository = careerRepository;
        this.institutionService = institutionService;
        this.cataloguesService = cataloguesService;
    }
    async catalogue() {
        const response = await this.careerRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
            take: 1000,
        });
        return {
            pagination: {
                totalItems: response[1],
                limit: 10,
            },
            data: response[0],
        };
    }
    async create(payload) {
        const newCareer = this.careerRepository.create(payload);
        newCareer.modality = await this.cataloguesService.findOne(payload.modality.id);
        newCareer.state = await this.cataloguesService.findOne(payload.state.id);
        newCareer.type = await this.cataloguesService.findOne(payload.type.id);
        const careerCreated = await this.careerRepository.save(newCareer);
        return { data: careerCreated };
    }
    async findAll(params) {
        if ((params === null || params === void 0 ? void 0 : params.limit) > 0 && (params === null || params === void 0 ? void 0 : params.page) >= 0) {
            return await this.paginateAndFilter(params);
        }
        const data = await this.careerRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const career = await this.careerRepository.findOne({
            relations: ['institution', 'modality', 'state', 'type'],
            where: {
                id,
            },
        });
        if (!career) {
            throw new common_1.NotFoundException(`La carrera con id:  ${id} no se encontro`);
        }
        return { data: career };
    }
    async update(id, payload) {
        const career = await this.careerRepository.findOneBy({ id });
        if (!career) {
            throw new common_1.NotFoundException(`La carrera con id:  ${id} no se encontro`);
        }
        this.careerRepository.merge(career, payload);
        const careerUpdated = await this.careerRepository.save(career);
        return { data: careerUpdated };
    }
    async remove(id) {
        const career = await this.careerRepository.findOneBy({ id });
        if (!career) {
            throw new common_1.NotFoundException(`La carrera con id:  ${id} no se encontro`);
        }
        const careerDeleted = await this.careerRepository.softRemove(career);
        return { data: careerDeleted };
    }
    async removeAll(payload) {
        const careersDeleted = await this.careerRepository.softRemove(payload);
        return { data: careersDeleted };
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
            where.push({ acronym: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ code: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ codeSniese: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ logo: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ name: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ shortName: (0, typeorm_1.ILike)(`%${search}%`) });
            where.push({ degree: (0, typeorm_1.ILike)(`%${search}%`) });
        }
        const response = await this.careerRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
            where,
            take: limit,
            skip: dto_1.PaginationDto.getOffset(limit, page),
        });
        return {
            pagination: { limit, totalItems: response[1] },
            data: response[0],
        };
    }
};
CareersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.CAREER_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.InstitutionsService,
        services_1.CataloguesService])
], CareersService);
exports.CareersService = CareersService;
//# sourceMappingURL=careers.service.js.map