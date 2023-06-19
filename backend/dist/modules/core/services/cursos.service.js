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
exports.CursosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let CursosService = class CursosService {
    constructor(cursoRepository, cataloguesService) {
        this.cursoRepository = cursoRepository;
        this.cataloguesService = cataloguesService;
    }
    async catalogue() {
        const response = await this.cursoRepository.findAndCount({
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
        const newCurso = this.cursoRepository.create(payload);
        newCurso.modality = await this.cataloguesService.findOne(payload.modality.id);
        newCurso.state = await this.cataloguesService.findOne(payload.state.id);
        newCurso.type = await this.cataloguesService.findOne(payload.type.id);
        const cursoCreated = await this.cursoRepository.save(newCurso);
        return { data: cursoCreated };
    }
    async findAll(params) {
        const data = await this.cursoRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const curso = await this.cursoRepository.findOne({
            relations: ['institution', 'modality', 'state', 'type'],
            where: {
                id,
            },
        });
        if (!curso) {
            throw new common_1.NotFoundException(`El curso con id:  ${id} no se encontro`);
        }
        return { data: curso };
    }
    async update(id, payload) {
        const curso = await this.cursoRepository.findOneBy({ id });
        if (!curso) {
            throw new common_1.NotFoundException(`El curso con id:  ${id} no se encontro`);
        }
        this.cursoRepository.merge(curso, payload);
        const cursoUpdated = await this.cursoRepository.save(curso);
        return { data: cursoUpdated };
    }
    async remove(id) {
        const curso = await this.cursoRepository.findOneBy({ id });
        if (!curso) {
            throw new common_1.NotFoundException(`El curso con id:  ${id} no se encontro`);
        }
        const cursoDeleted = await this.cursoRepository.softRemove(curso);
        return { data: cursoDeleted };
    }
    async removeAll(payload) {
        const cursosDeleted = await this.cursoRepository.softRemove(payload);
        return { data: cursosDeleted };
    }
};
CursosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.CURSO_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CataloguesService])
], CursosService);
exports.CursosService = CursosService;
//# sourceMappingURL=cursos.service.js.map