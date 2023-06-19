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
exports.TipoUsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let TipoUsuariosService = class TipoUsuariosService {
    constructor(tipousuarioRepository, cataloguesService) {
        this.tipousuarioRepository = tipousuarioRepository;
        this.cataloguesService = cataloguesService;
    }
    async catalogue() {
        const response = await this.tipousuarioRepository.findAndCount({
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
        const newTipousuario = this.tipousuarioRepository.create(payload);
        newTipousuario.modality = await this.cataloguesService.findOne(payload.modality.id);
        newTipousuario.state = await this.cataloguesService.findOne(payload.state.id);
        newTipousuario.type = await this.cataloguesService.findOne(payload.type.id);
        const tipousuarioCreated = await this.tipousuarioRepository.save(newTipousuario);
        return { data: tipousuarioCreated };
    }
    async findAll(params) {
        const data = await this.tipousuarioRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const tipoUsuario = await this.tipousuarioRepository.findOne({
            relations: ['institution', 'modality', 'state', 'type'],
            where: {
                id,
            },
        });
        if (!tipoUsuario) {
            throw new common_1.NotFoundException(`El tipo de usuario con id:  ${id} no se encontro`);
        }
        return { data: tipoUsuario };
    }
    async update(id, payload) {
        const tipoUsuario = await this.tipousuarioRepository.findOneBy({ id });
        if (!tipoUsuario) {
            throw new common_1.NotFoundException(`El tipo de usuario con id:  ${id} no se encontro`);
        }
        this.tipousuarioRepository.merge(tipoUsuario, payload);
        const tipousuarioUpdated = await this.tipousuarioRepository.save(tipoUsuario);
        return { data: tipousuarioUpdated };
    }
    async remove(id) {
        const tipoUsuario = await this.tipousuarioRepository.findOneBy({ id });
        if (!tipoUsuario) {
            throw new common_1.NotFoundException(`El tipo de usuario con id:  ${id} no se encontro`);
        }
        const tipousuarioDeleted = await this.tipousuarioRepository.softRemove(tipoUsuario);
        return { data: tipousuarioDeleted };
    }
    async removeAll(payload) {
        const tipousuariosDeleted = await this.tipousuarioRepository.softRemove(payload);
        return { data: tipousuariosDeleted };
    }
};
TipoUsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.TIPO_LISTA_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CataloguesService])
], TipoUsuariosService);
exports.TipoUsuariosService = TipoUsuariosService;
//# sourceMappingURL=usuariotipos.service.js.map