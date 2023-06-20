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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../shared/enums");
let RolesService = class RolesService {
    constructor(rolRepository) {
        this.rolRepository = rolRepository;
    }
    async catalogue() {
        const response = await this.rolRepository.findAndCount({
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
        const newRol = this.rolRepository.create(payload);
        const rolCreated = await this.rolRepository.save(newRol);
        return { data: rolCreated };
    }
    async findAll(params) {
        const data = await this.rolRepository.findAndCount({});
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const rol = await this.rolRepository.findOne({
            where: {
                id,
            },
        });
        if (!rol) {
            throw new common_1.NotFoundException(`El rol con id:  ${id} no se encontro`);
        }
        return { data: rol };
    }
    async update(id, payload) {
        const rol = await this.rolRepository.findOneBy({ id });
        if (!rol) {
            throw new common_1.NotFoundException(`El rol con id:  ${id} no se encontro`);
        }
        this.rolRepository.merge(rol, payload);
        const rolUpdated = await this.rolRepository.save(rol);
        return { data: rolUpdated };
    }
    async remove(id) {
        const rol = await this.rolRepository.findOneBy({ id });
        if (!rol) {
            throw new common_1.NotFoundException(`El rol con id:  ${id} no se encontro`);
        }
        const rolDeleted = await this.rolRepository.softRemove(rol);
        return { data: rolDeleted };
    }
    async removeAll(payload) {
        const rolesDeleted = await this.rolRepository.softRemove(payload);
        return { data: rolesDeleted };
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.ROL_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map