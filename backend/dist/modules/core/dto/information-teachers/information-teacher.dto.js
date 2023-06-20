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
exports.InformationTeacherDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const entities_1 = require("../../entities");
class InformationTeacherDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { countryHigherEducation: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, dedicationTime: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, financingType: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, higherEducation: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, scholarship: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, scholarshipType: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, teachingLadder: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, academicUnit: { required: true, type: () => String }, administrativeHours: { required: true, type: () => Number }, classHours: { required: true, type: () => Number }, communityHours: { required: true, type: () => Number }, degreeHigherEducation: { required: true, type: () => String }, hoursWorked: { required: true, type: () => Number }, holidays: { required: true, type: () => Date }, homeVacation: { required: true, type: () => Date }, investigationHours: { required: true, type: () => Number }, institutionHigherEducation: { required: true, type: () => String }, otherHours: { required: true, type: () => String }, publications: { required: true, type: () => Number }, scholarshipAmount: { required: true, type: () => Number }, totalSubjects: { required: true, type: () => Number }, technical: { required: true, type: () => String }, technology: { required: true, type: () => String }, totalPublications: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherDto.prototype, "countryHigherEducation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherDto.prototype, "dedicationTime", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherDto.prototype, "financingType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherDto.prototype, "higherEducation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherDto.prototype, "scholarship", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherDto.prototype, "scholarshipType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationTeacherDto.prototype, "teachingLadder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], InformationTeacherDto.prototype, "academicUnit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo administrativeHours tiene que ser númerico.' }),
    (0, class_validator_1.Min)(0, {
        message: 'El campo administrativeHours número de caracteres mínimo es 0.',
    }),
    __metadata("design:type", Number)
], InformationTeacherDto.prototype, "administrativeHours", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo classHours tiene que ser númerico.' }),
    (0, class_validator_1.Min)(0, { message: 'El campo classHours número de caracteres mínimo es 0.' }),
    __metadata("design:type", Number)
], InformationTeacherDto.prototype, "classHours", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo communityHours tiene que ser númerico.' }),
    (0, class_validator_1.Min)(0, {
        message: 'El número de caracteres del campo communityHours  mínimo es 0.',
    }),
    __metadata("design:type", Number)
], InformationTeacherDto.prototype, "communityHours", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'degreeHigherEducation debe ser un texto' }),
    __metadata("design:type", String)
], InformationTeacherDto.prototype, "degreeHigherEducation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo hoursWorked tiene que ser númerico.' }),
    (0, class_validator_1.Min)(0, {
        message: 'El número de caracteres mínimo es 0 en el campo hoursWorked.',
    }),
    __metadata("design:type", Number)
], InformationTeacherDto.prototype, "hoursWorked", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({
        message: 'El campo holidays lleva las fechas de los dias festivos.',
    }),
    __metadata("design:type", Date)
], InformationTeacherDto.prototype, "holidays", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)({ message: 'El campo homeVacation es tipo fecha' }),
    __metadata("design:type", Date)
], InformationTeacherDto.prototype, "homeVacation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo investigationHours tiene que ser númerico.' }),
    (0, class_validator_1.Min)(0, {
        message: 'El número de caracteres mínimo es 0 en el campo investigationHours.',
    }),
    __metadata("design:type", Number)
], InformationTeacherDto.prototype, "investigationHours", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'institutionHigherEducation debe ser un texto' }),
    __metadata("design:type", String)
], InformationTeacherDto.prototype, "institutionHigherEducation", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'otherHours debe ser un texto' }),
    __metadata("design:type", String)
], InformationTeacherDto.prototype, "otherHours", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo publications tiene que ser númerico.' }),
    (0, class_validator_1.Min)(1, {
        message: 'El número de caracteres mínimo es 0 en el campo publications.',
    }),
    __metadata("design:type", Number)
], InformationTeacherDto.prototype, "publications", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo scholarshipAmount tiene que ser númerico.' }),
    (0, class_validator_1.Min)(0, {
        message: 'El número de caracteres mínimo es 0 en el campo scholarshipAmount.',
    }),
    __metadata("design:type", Number)
], InformationTeacherDto.prototype, "scholarshipAmount", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo totalSubjects tiene que ser númerico.' }),
    (0, class_validator_1.Min)(0, {
        message: 'El número de caracteres mínimo es 0 en el campo totalSubjects.',
    }),
    __metadata("design:type", Number)
], InformationTeacherDto.prototype, "totalSubjects", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'technical debe ser un texto' }),
    (0, class_validator_1.MaxLength)(255, {
        message: 'Debe tener como Maximo 255 caracteres technical',
    }),
    __metadata("design:type", String)
], InformationTeacherDto.prototype, "technical", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'technology debe ser un texto' }),
    (0, class_validator_1.MaxLength)(255, {
        message: 'Debe tener como Maximo 255 caracteres technology',
    }),
    __metadata("design:type", String)
], InformationTeacherDto.prototype, "technology", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo totalPublications tiene que ser númerico.' }),
    (0, class_validator_1.Min)(0, {
        message: 'El número de caracteres mínimo es 0 en el campo totalPublications.',
    }),
    __metadata("design:type", Number)
], InformationTeacherDto.prototype, "totalPublications", void 0);
exports.InformationTeacherDto = InformationTeacherDto;
//# sourceMappingURL=information-teacher.dto.js.map