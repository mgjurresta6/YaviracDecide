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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let UsuariosService = class UsuariosService {
    constructor(usuarioRepository, cataloguesService) {
        this.usuarioRepository = usuarioRepository;
        this.cataloguesService = cataloguesService;
    }
    async catalogue() {
        const response = await this.usuarioRepository.findAndCount({
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
        const newUsuario = this.usuarioRepository.create(payload);
        newUsuario.modality = await this.cataloguesService.findOne(payload.modality.id);
        newUsuario.state = await this.cataloguesService.findOne(payload.state.id);
        newUsuario.type = await this.cataloguesService.findOne(payload.type.id);
        const usuarioCreated = await this.usuarioRepository.save(newUsuario);
        return { data: usuarioCreated };
    }
    async findAll(params) {
        const data = await this.usuarioRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(cedula) {
        const usuario = await this.usuarioRepository.findOne({
            relations: ['institution', 'modality', 'state', 'type'],
            where: {
                cedula,
            },
        });
        if (!usuario) {
            throw new common_1.NotFoundException(`El usuario con cedula:  ${cedula} no se encontro`);
        }
        return { data: cedula };
    }
    async update(cedula, payload) {
        const usuario = await this.usuarioRepository.findOneBy({ cedula });
        if (!usuario) {
            throw new common_1.NotFoundException(`El usuario con cedula:  ${cedula} no se encontro`);
        }
        this.usuarioRepository.merge(usuario, payload);
        const usuarioUpdated = await this.usuarioRepository.save(usuario);
        return { data: usuarioUpdated };
    }
    async remove(cedula) {
        const usuario = await this.usuarioRepository.findOneBy({ cedula });
        if (!usuario) {
            throw new common_1.NotFoundException(`El usuario con cedula:  ${cedula} no se encontro`);
        }
        const usuarioDeleted = await this.usuarioRepository.softRemove(usuario);
        return { data: usuarioDeleted };
    }
    async removeAll(payload) {
        const usuariosDeleted = await this.usuarioRepository.softRemove(payload);
        return { data: usuariosDeleted };
    }
};
UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.USUARIO_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CataloguesService])
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map