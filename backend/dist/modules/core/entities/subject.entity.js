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
exports.SubjectEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const entities_1 = require("./");
let SubjectEntity = class SubjectEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, academicPeriod: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, curriculum: { required: true, type: () => require("./curriculum.entity").CurriculumEntity }, state: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, type: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, autonomousHour: { required: true, type: () => Number }, code: { required: true, type: () => String }, credit: { required: true, type: () => Number }, name: { required: true, type: () => String }, practicalHour: { required: true, type: () => Number }, scale: { required: true, type: () => Number }, teacherHour: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SubjectEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], SubjectEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], SubjectEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamptz',
        nullable: true,
    }),
    __metadata("design:type", Date)
], SubjectEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'academic_period_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], SubjectEntity.prototype, "academicPeriod", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CurriculumEntity, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'curriculum_id' }),
    __metadata("design:type", entities_1.CurriculumEntity)
], SubjectEntity.prototype, "curriculum", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'state_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], SubjectEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'type_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], SubjectEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        name: 'autonomous_hour',
        default: 0,
        comment: 'Hora autónoma de la asignatura',
    }),
    __metadata("design:type", Number)
], SubjectEntity.prototype, "autonomousHour", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'code',
        length: 100,
        comment: 'Código de la asignatura',
    }),
    __metadata("design:type", String)
], SubjectEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'credit',
        nullable: true,
        default: 0,
        comment: 'Creditos de la asignatura',
    }),
    __metadata("design:type", Number)
], SubjectEntity.prototype, "credit", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'name',
        length: 255,
        default: 'SN',
        comment: 'Nombre de la asignatura',
    }),
    __metadata("design:type", String)
], SubjectEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        name: 'practical_hour',
        default: 0,
        comment: 'Horas prácticas de la asignatura',
    }),
    __metadata("design:type", Number)
], SubjectEntity.prototype, "practicalHour", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        name: 'scale',
        default: 0,
        comment: 'ponderable de la asignatura',
    }),
    __metadata("design:type", Number)
], SubjectEntity.prototype, "scale", void 0);
__decorate([
    (0, typeorm_1.Column)('int', {
        name: 'teacher_hour',
        default: 0,
        comment: 'Horas del docente',
    }),
    __metadata("design:type", Number)
], SubjectEntity.prototype, "teacherHour", void 0);
SubjectEntity = __decorate([
    (0, typeorm_1.Entity)('subjects', { schema: 'core' })
], SubjectEntity);
exports.SubjectEntity = SubjectEntity;
//# sourceMappingURL=subject.entity.js.map