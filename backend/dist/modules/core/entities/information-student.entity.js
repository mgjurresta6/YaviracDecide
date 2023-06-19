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
exports.InformationStudentEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const entities_1 = require("./");
let InformationStudentEntity = class InformationStudentEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, student: { required: true, type: () => require("./student.entity").StudentEntity }, isExecutedPractice: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, isExecutedCommunity: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, isDisability: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, isLostGratuity: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, isSubjectRepeat: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, address: { required: true, type: () => String }, community: { required: true, type: () => Number }, contactEmergencyName: { required: true, type: () => String }, contactEmergencyKinship: { required: true, type: () => String }, contactEmergencyPhone: { required: true, type: () => String }, disabilityPercentage: { required: true, type: () => Number }, economicAmount: { required: true, type: () => Number }, educationalAmount: { required: true, type: () => Number }, familyIncome: { required: true, type: () => Number }, financingScholarshipType: { required: true, type: () => String }, membersHouseNumber: { required: true, type: () => Number }, practiceHours: { required: true, type: () => Number }, postalCode: { required: true, type: () => String }, scholarshipAmount: { required: true, type: () => Number }, tariffScholarshipPercentage: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InformationStudentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], InformationStudentEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], InformationStudentEntity.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamptz',
        nullable: true,
    }),
    __metadata("design:type", Date)
], InformationStudentEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_1.StudentEntity),
    __metadata("design:type", entities_1.StudentEntity)
], InformationStudentEntity.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'is_executed_practice' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationStudentEntity.prototype, "isExecutedPractice", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'is_executed_community' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationStudentEntity.prototype, "isExecutedCommunity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'is_disability' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationStudentEntity.prototype, "isDisability", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'is_lost_Gratuity' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationStudentEntity.prototype, "isLostGratuity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'is_subject_repeat' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationStudentEntity.prototype, "isSubjectRepeat", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'address',
        length: 1000,
        comment: 'La direccion donde reside el estudiante',
    }),
    __metadata("design:type", String)
], InformationStudentEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', {
        name: 'community',
        comment: 'Las horas realizadas por parte del estudiante en integracion con la sociedad',
    }),
    __metadata("design:type", Number)
], InformationStudentEntity.prototype, "community", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'contact_emergency_name',
        length: 255,
        comment: 'Nombre del contacto de emergencia para informar sobre el estudiante',
    }),
    __metadata("design:type", String)
], InformationStudentEntity.prototype, "contactEmergencyName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'contact_emergency_kinship',
        length: 255,
        comment: 'Nombre del contacto de emergencia de parentescos para informar sobre el estudiante',
    }),
    __metadata("design:type", String)
], InformationStudentEntity.prototype, "contactEmergencyKinship", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'contact_emergency_phone',
        length: 255,
        comment: 'Numeros de contacto de emergencia para informar sobre el estudiante',
    }),
    __metadata("design:type", String)
], InformationStudentEntity.prototype, "contactEmergencyPhone", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', {
        name: 'disability_percentage',
        comment: 'El porcentaje de discapicidad que tiene el estudiante ',
    }),
    __metadata("design:type", Number)
], InformationStudentEntity.prototype, "disabilityPercentage", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', {
        name: 'economic_amount',
        comment: 'El monto de ayuda economica que el estudiante recibe',
    }),
    __metadata("design:type", Number)
], InformationStudentEntity.prototype, "economicAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', {
        name: 'educational_amount',
        comment: 'El monto de credito que el estudiante tiene',
    }),
    __metadata("design:type", Number)
], InformationStudentEntity.prototype, "educationalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', {
        name: 'family_income',
        comment: 'La direccion donde reside el estudiante',
    }),
    __metadata("design:type", Number)
], InformationStudentEntity.prototype, "familyIncome", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'financing_scholarship_type',
        length: 180,
        comment: 'recibi el estudiante un financiamiento si =1, no = 2',
    }),
    __metadata("design:type", String)
], InformationStudentEntity.prototype, "financingScholarshipType", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', {
        name: 'members_house_number',
        comment: 'Numero de familiares con quien vive el estudiante',
    }),
    __metadata("design:type", Number)
], InformationStudentEntity.prototype, "membersHouseNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', {
        name: 'practice_hours',
        comment: 'Las horas realizadas por parte del estudiante en pasantias',
    }),
    __metadata("design:type", Number)
], InformationStudentEntity.prototype, "practiceHours", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'postal_code',
        length: 100,
        comment: 'Codigo postal donde el estudiante reside',
    }),
    __metadata("design:type", String)
], InformationStudentEntity.prototype, "postalCode", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', {
        name: 'scholarship_amount',
        comment: 'El monto de beca que el estudiante obtuvo',
    }),
    __metadata("design:type", Number)
], InformationStudentEntity.prototype, "scholarshipAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', {
        name: 'tariff_scholarship_percentage',
        comment: 'El porcentaje de beca que cubre la institutcion el estudiante ',
    }),
    __metadata("design:type", Number)
], InformationStudentEntity.prototype, "tariffScholarshipPercentage", void 0);
InformationStudentEntity = __decorate([
    (0, typeorm_1.Entity)('information_students', { schema: 'core' })
], InformationStudentEntity);
exports.InformationStudentEntity = InformationStudentEntity;
//# sourceMappingURL=information-student.entity.js.map