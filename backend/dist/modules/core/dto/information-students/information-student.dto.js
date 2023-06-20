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
exports.InformationStudentDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const entities_1 = require("../../entities");
class InformationStudentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { isExecutedPractice: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, isExecutedCommunity: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, isDisability: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, isLostGratuity: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, isSubjectRepeat: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, address: { required: true, type: () => String }, community: { required: true, type: () => Number }, contactEmergencyName: { required: true, type: () => String }, contactEmergencyKinship: { required: true, type: () => String }, contactEmergencyPhone: { required: true, type: () => String }, disabilityPercentage: { required: true, type: () => Number }, educationalAmount: { required: true, type: () => Number }, economicAmount: { required: true, type: () => Number }, familyIncome: { required: true, type: () => Number }, membersHouseNumber: { required: true, type: () => Number }, postalCode: { required: true, type: () => String }, practiceHours: { required: true, type: () => Number }, scholarshipAmount: { required: true, type: () => Number }, tariffScholarshipPercentage: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationStudentDto.prototype, "isExecutedPractice", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationStudentDto.prototype, "isExecutedCommunity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationStudentDto.prototype, "isDisability", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationStudentDto.prototype, "isLostGratuity", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], InformationStudentDto.prototype, "isSubjectRepeat", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Debe ser un string' }),
    (0, class_validator_1.MaxLength)(1000, { message: 'Maximo 1000 caracteres' }),
    __metadata("design:type", String)
], InformationStudentDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Debe ser tipo numero' }),
    (0, class_validator_1.Min)(0, { message: 'El número de digitos mínimo es 0.' }),
    __metadata("design:type", Number)
], InformationStudentDto.prototype, "community", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Debe ser un string' }),
    (0, class_validator_1.MaxLength)(255, { message: 'Maximo 255 caracteres' }),
    __metadata("design:type", String)
], InformationStudentDto.prototype, "contactEmergencyName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Debe ser un string' }),
    (0, class_validator_1.MaxLength)(255, { message: 'Maximo 255 caracteres' }),
    __metadata("design:type", String)
], InformationStudentDto.prototype, "contactEmergencyKinship", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Debe ser un string' }),
    (0, class_validator_1.MaxLength)(255, { message: 'Maximo 255 caracteres' }),
    __metadata("design:type", String)
], InformationStudentDto.prototype, "contactEmergencyPhone", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Debe ser tipo numero' }),
    (0, class_validator_1.Min)(0, { message: 'El número de digito mínimo es 0.' }),
    (0, class_validator_1.Max)(100, { message: 'Maximo 100 digito' }),
    __metadata("design:type", Number)
], InformationStudentDto.prototype, "disabilityPercentage", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Debe ser tipo numero' }),
    (0, class_validator_1.Min)(0, { message: 'El número de digito mínimo es 0.' }),
    __metadata("design:type", Number)
], InformationStudentDto.prototype, "educationalAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Debe ser tipo numero' }),
    (0, class_validator_1.Min)(0, { message: 'El número de digito mínimo es 0.' }),
    __metadata("design:type", Number)
], InformationStudentDto.prototype, "economicAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Debe ser tipo numero' }),
    __metadata("design:type", Number)
], InformationStudentDto.prototype, "familyIncome", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Debe ser tipo numero' }),
    (0, class_validator_1.Min)(1, { message: 'El número de digitos mínimo es 1.' }),
    (0, class_validator_1.Max)(20, { message: 'Maximo 20 digitos' }),
    __metadata("design:type", Number)
], InformationStudentDto.prototype, "membersHouseNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Debe ser un string' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Maximo 100 caracteres' }),
    __metadata("design:type", String)
], InformationStudentDto.prototype, "postalCode", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Debe ser tipo numero' }),
    (0, class_validator_1.Min)(0, { message: 'El número de digito mínimo es 0.' }),
    __metadata("design:type", Number)
], InformationStudentDto.prototype, "practiceHours", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Debe ser tipo numero' }),
    __metadata("design:type", Number)
], InformationStudentDto.prototype, "scholarshipAmount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Debe ser tipo numero' }),
    (0, class_validator_1.Min)(0, { message: 'El número de digito mínimo es 0.' }),
    (0, class_validator_1.Max)(100, { message: 'Maximo 100 digito' }),
    __metadata("design:type", Number)
], InformationStudentDto.prototype, "tariffScholarshipPercentage", void 0);
exports.InformationStudentDto = InformationStudentDto;
//# sourceMappingURL=information-student.dto.js.map