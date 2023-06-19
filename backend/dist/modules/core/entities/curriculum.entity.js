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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurriculumEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const entities_1 = require("./");
let CurriculumEntity = class CurriculumEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, endedAt: { required: true, type: () => Date }, startedAt: { required: true, type: () => Date }, updatedAT: { required: true, type: () => Date }, deletedAT: { required: true, type: () => Date }, career: { required: true, type: () => require("./career.entity").CareerEntity }, state: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, code: { required: true, type: () => String }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, resolutionNumber: { required: true, type: () => String }, periodicAcademicNumber: { required: true, type: () => Number }, weeksNumber: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CurriculumEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'ended_At',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de creacion de la carrera',
    }),
    __metadata("design:type", Date)
], CurriculumEntity.prototype, "endedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'started_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de creacion de la carrera',
    }),
    __metadata("design:type", Date)
], CurriculumEntity.prototype, "startedAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], CurriculumEntity.prototype, "updatedAT", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamptz',
        nullable: true,
    }),
    __metadata("design:type", Date)
], CurriculumEntity.prototype, "deletedAT", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CareerEntity, { nullable: false }),
    __metadata("design:type", entities_1.CareerEntity)
], CurriculumEntity.prototype, "career", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: false }),
    __metadata("design:type", entities_1.CatalogueEntity)
], CurriculumEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'code',
        length: 255,
        default: 'SN',
        comment: 'Nombre del producto',
    }),
    __metadata("design:type", String)
], CurriculumEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'name',
        length: 255,
        default: 'SN',
        comment: 'Nombre del producto',
    }),
    __metadata("design:type", String)
], CurriculumEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'description',
        length: 255,
        default: 'SN',
        comment: 'Nombre del producto',
    }),
    __metadata("design:type", String)
], CurriculumEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'resolution_Number',
        length: 255,
        default: 'SN',
        comment: 'Numero de resolucion',
    }),
    __metadata("design:type", String)
], CurriculumEntity.prototype, "resolutionNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'periodic_Academic_Number',
        comment: 'numero de periodo academmico',
    }),
    __metadata("design:type", Number)
], CurriculumEntity.prototype, "periodicAcademicNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'weeks_Number',
        comment: 'Numeros de semanas',
    }),
    __metadata("design:type", Number)
], CurriculumEntity.prototype, "weeksNumber", void 0);
CurriculumEntity = __decorate([
    (0, typeorm_1.Entity)('curricula', { schema: 'core' })
], CurriculumEntity);
exports.CurriculumEntity = CurriculumEntity;
//# sourceMappingURL=curriculum.entity.js.map