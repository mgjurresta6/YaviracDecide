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
exports.ParalelosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../shared/enums");
let ParalelosService = class ParalelosService {
    constructor(paraleloRepository) {
        this.paraleloRepository = paraleloRepository;
    }
    async catalogue() {
        const response = await this.paraleloRepository.findAndCount({
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
        const newParalelo = this.paraleloRepository.create(payload);
        const paraleloCreated = await this.paraleloRepository.save(newParalelo);
        return { data: paraleloCreated };
    }
    async findAll(params) {
        const data = await this.paraleloRepository.findAndCount({});
        return { pagination: { totalItems: data[1], limit: 10 }, data: data[0] };
    }
    async findOne(id) {
        const paralelo = await this.paraleloRepository.findOne({
            where: {
                id,
            },
        });
        if (!paralelo) {
            throw new common_1.NotFoundException(`El paralelo con id:  ${id} no se encontro`);
        }
        return { data: paralelo };
    }
    async update(id, payload) {
        const paralelo = await this.paraleloRepository.findOneBy({ id });
        if (!paralelo) {
            throw new common_1.NotFoundException(`El paralelo con id:  ${id} no se encontro`);
        }
        this.paraleloRepository.merge(paralelo, payload);
        const paraleloUpdated = await this.paraleloRepository.save(paralelo);
        return { data: paraleloUpdated };
    }
    async remove(id) {
        const paralelo = await this.paraleloRepository.findOneBy({ id });
        if (!paralelo) {
            throw new common_1.NotFoundException(`El paralelo con id:  ${id} no se encontro`);
        }
        const paraleloDeleted = await this.paraleloRepository.softRemove(paralelo);
        return { data: paraleloDeleted };
    }
    async removeAll(payload) {
        const paralelosDeleted = await this.paraleloRepository.softRemove(payload);
        return { data: paralelosDeleted };
    }
};
ParalelosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.PARALELO_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ParalelosService);
exports.ParalelosService = ParalelosService;
//# sourceMappingURL=paralelos.service.js.map