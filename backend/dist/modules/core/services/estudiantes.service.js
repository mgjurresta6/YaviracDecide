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
exports.EstudiantesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../shared/enums");
const services_1 = require("./");
let EstudiantesService = class EstudiantesService {
    constructor(estudianteRepository, cursosService, rolesService, tiposService) {
        this.estudianteRepository = estudianteRepository;
        this.cursosService = cursosService;
        this.rolesService = rolesService;
        this.tiposService = tiposService;
    }
    async catalogue() {
        const response = await this.estudianteRepository.findAndCount({
            relations: ['curso', 'rol', 'tipo'],
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
        const newEstudiante = this.estudianteRepository.create(payload);
        const estudianteCreated = await this.estudianteRepository.save(newEstudiante);
        return { data: estudianteCreated };
    }
    async findAll(params) {
        const data = await this.estudianteRepository.findAndCount({
            relations: ['curso', 'rol'],
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const estudiante = await this.estudianteRepository.findOne({
            relations: ['curso', 'rol'],
            where: {
                id,
            },
        });
        if (!estudiante) {
            throw new common_1.NotFoundException(`El usuario con cedula:  ${id} no se encontro`);
        }
        return { data: id };
    }
    async update(id, payload) {
        const estudiante = await this.estudianteRepository.findOneBy({ id });
        if (!estudiante) {
            throw new common_1.NotFoundException(`El estudiante con cedula:  ${id} no se encontro`);
        }
        this.estudianteRepository.merge(estudiante, payload);
        const estudianteUpdated = await this.estudianteRepository.save(estudiante);
        return { data: estudianteUpdated };
    }
    async remove(id) {
        const estudiante = await this.estudianteRepository.findOneBy({ id });
        if (!estudiante) {
            throw new common_1.NotFoundException(`El estudiante con cedula:  ${id} no se encontro`);
        }
        const estudianteDeleted = await this.estudianteRepository.softRemove(estudiante);
        return { data: estudianteDeleted };
    }
    async removeAll(payload) {
        const estudianteDeleted = await this.estudianteRepository.softRemove(payload);
        return { data: estudianteDeleted };
    }
};
EstudiantesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.ESTUDIANTE_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CursosService,
        services_1.RolesService,
        services_1.TipoUsuariosService])
], EstudiantesService);
exports.EstudiantesService = EstudiantesService;
//# sourceMappingURL=estudiantes.service.js.map