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
exports.VotosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const services_1 = require("./");
const enums_1 = require("../../../shared/enums");
let VotosService = class VotosService {
    constructor(votoRepository, cataloguesService) {
        this.votoRepository = votoRepository;
        this.cataloguesService = cataloguesService;
    }
    async catalogue() {
        const response = await this.votoRepository.findAndCount({
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
        const newVoto = this.votoRepository.create(payload);
        newVoto.modality = await this.cataloguesService.findOne(payload.modality.id);
        newVoto.state = await this.cataloguesService.findOne(payload.state.id);
        newVoto.type = await this.cataloguesService.findOne(payload.type.id);
        const votoCreated = await this.votoRepository.save(newVoto);
        return { data: votoCreated };
    }
    async findAll(params) {
        const data = await this.votoRepository.findAndCount({
            relations: ['institution', 'modality', 'state', 'type'],
        });
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const voto = await this.votoRepository.findOne({
            relations: ['institution', 'modality', 'state', 'type'],
            where: {
                id,
            },
        });
        if (!voto) {
            throw new common_1.NotFoundException(`El voto con id:  ${id} no se encontro`);
        }
        return { data: voto };
    }
    async update(id, payload) {
        const voto = await this.votoRepository.findOneBy({ id });
        if (!voto) {
            throw new common_1.NotFoundException(`El voto con id:  ${id} no se encontro`);
        }
        this.votoRepository.merge(voto, payload);
        const votoUpdated = await this.votoRepository.save(voto);
        return { data: votoUpdated };
    }
    async remove(id) {
        const voto = await this.votoRepository.findOneBy({ id });
        if (!voto) {
            throw new common_1.NotFoundException(`El voto con id:  ${id} no se encontro`);
        }
        const votoDeleted = await this.votoRepository.softRemove(voto);
        return { data: votoDeleted };
    }
    async removeAll(payload) {
        const votosDeleted = await this.votoRepository.softRemove(payload);
        return { data: votosDeleted };
    }
};
VotosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.VOTO_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.CataloguesService])
], VotosService);
exports.VotosService = VotosService;
//# sourceMappingURL=votos.service.js.map