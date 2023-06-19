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
exports.InformationTeacherEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const entities_1 = require("./");
let InformationTeacherEntity = class InformationTeacherEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, countryHigherEducation: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, dedicationTime: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, financingType: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, higherEducation: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, scholarship: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, scholarshipType: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, teachingLadder: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, username: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, academicUnit: { required: true, type: () => String }, administrativeHours: { required: true, type: () => Number }, classHours: { required: true, type: () => Number }, communityHours: { required: true, type: () => Number }, degreeHigherEducation: { required: true, type: () => String }, hoursWorked: { required: true, type: () => Number }, holidays: { required: true, type: () => Date }, homeVacation: { required: true, type: () => Date }, institutionHigherEducation: { required: true, type: () => String }, investigationHours: { required: true, type: () => Number }, otherHours: { required: true, type: () => String }, publications: { required: true, type: () => Number }, scholarshipAmount: { required: true, type: () => Number }, totalSubjects: { required: true, type: () => Number }, technical: { required: true, type: () => String }, technology: { required: true, type: () => String }, totalPublications: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InformationTeacherEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], InformationTeacherEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], InformationTeacherEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamptz',
        nullable: true,
    }),
    __metadata("design:type", Date)
], InformationTeacherEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'country_higher_education_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherEntity.prototype, "countryHigherEducation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'dedication_time_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherEntity.prototype, "dedicationTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'financing_type_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherEntity.prototype, "financingType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'higher_education_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherEntity.prototype, "higherEducation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'scholarship_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherEntity.prototype, "scholarship", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'scholarship_type_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherEntity.prototype, "scholarshipType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'teaching_ladder_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherEntity.prototype, "teachingLadder", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'username_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'academic_unit',
        length: 255,
        comment: 'Nombre de la unidad academica',
    }),
    __metadata("design:type", String)
], InformationTeacherEntity.prototype, "academicUnit", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'administrative_hours',
        unsigned: true,
        comment: 'Horas dedicadas a la administracion al mes',
    }),
    __metadata("design:type", Number)
], InformationTeacherEntity.prototype, "administrativeHours", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'class_hours',
        unsigned: true,
        comment: 'Total de horas de clase dadas',
    }),
    __metadata("design:type", Number)
], InformationTeacherEntity.prototype, "classHours", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'community_hours',
        unsigned: true,
        comment: 'Horas dedicadas a labores comunitarios',
    }),
    __metadata("design:type", Number)
], InformationTeacherEntity.prototype, "communityHours", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'degree_higher_education',
        length: 255,
        comment: 'Que grado de educación superior tiene el usuario',
    }),
    __metadata("design:type", String)
], InformationTeacherEntity.prototype, "degreeHigherEducation", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'hours_worked',
        unsigned: true,
        comment: 'Total de las horas trabajadas al mes',
    }),
    __metadata("design:type", Number)
], InformationTeacherEntity.prototype, "hoursWorked", void 0);
__decorate([
    (0, typeorm_1.Column)('date', {
        nullable: true,
        name: 'holidays',
        comment: 'Fecha de los dias festivos.',
    }),
    __metadata("design:type", Date)
], InformationTeacherEntity.prototype, "holidays", void 0);
__decorate([
    (0, typeorm_1.Column)('date', {
        nullable: true,
        name: 'home_vacation',
        comment: 'Fecha para las vacacines',
    }),
    __metadata("design:type", Date)
], InformationTeacherEntity.prototype, "homeVacation", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'institution_higher_education',
        length: 255,
        comment: 'Nombre de la institución de educación superior',
    }),
    __metadata("design:type", String)
], InformationTeacherEntity.prototype, "institutionHigherEducation", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'investigation_hours',
        unsigned: true,
        comment: 'Horas de investigacion al mes',
    }),
    __metadata("design:type", Number)
], InformationTeacherEntity.prototype, "investigationHours", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'other_hours',
        length: 255,
        comment: 'Horas dedicadas a otras actividades',
    }),
    __metadata("design:type", String)
], InformationTeacherEntity.prototype, "otherHours", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'publications',
        unsigned: true,
        comment: 'Revisar publicacion',
    }),
    __metadata("design:type", Number)
], InformationTeacherEntity.prototype, "publications", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'scholarship_amount',
        unsigned: true,
        comment: 'Precio de la beca a pagar',
    }),
    __metadata("design:type", Number)
], InformationTeacherEntity.prototype, "scholarshipAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'total_subjects',
        unsigned: true,
        comment: 'Total de personas en la academia',
    }),
    __metadata("design:type", Number)
], InformationTeacherEntity.prototype, "totalSubjects", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'technical',
        length: 255,
        comment: 'nombre de la tecnica a usar',
    }),
    __metadata("design:type", String)
], InformationTeacherEntity.prototype, "technical", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'technology',
        length: 255,
        comment: 'nombres de las salas de tecnologia',
    }),
    __metadata("design:type", String)
], InformationTeacherEntity.prototype, "technology", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'total_publications',
        unsigned: true,
        comment: 'Total de las publicaciones realizadas sata el momento',
    }),
    __metadata("design:type", Number)
], InformationTeacherEntity.prototype, "totalPublications", void 0);
InformationTeacherEntity = __decorate([
    (0, typeorm_1.Entity)('information_teachers', { schema: 'core' })
], InformationTeacherEntity);
exports.InformationTeacherEntity = InformationTeacherEntity;
//# sourceMappingURL=information-teacher.entity.js.map