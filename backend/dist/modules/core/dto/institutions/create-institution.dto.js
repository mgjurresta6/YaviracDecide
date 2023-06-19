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
exports.CreateInstitutionDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const entities_1 = require("../../entities");
const validation_1 = require("../../../../shared/validation");
class CreateInstitutionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { address: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, state: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, acronym: { required: true, type: () => String }, cellphone: { required: true, type: () => String }, code: { required: true, type: () => String }, codeSniese: { required: true, type: () => String }, denomination: { required: true, type: () => String }, email: { required: true, type: () => String }, logo: { required: true, type: () => String }, name: { required: true, type: () => String }, numberStudents: { required: true, type: () => Number }, phone: { required: true, type: () => String }, shortName: { required: true, type: () => String }, slogan: { required: true, type: () => String }, web: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'address no debe estar vacío' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], CreateInstitutionDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'address no debe estar vacío' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], CreateInstitutionDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Acronym debe ser texto' }),
    (0, class_validator_1.MinLength)(2, { message: 'Acronym debe tener mínimo 2 caracteres' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Acronym debe tener máximo 2 caracteres' }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "acronym", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Cellphone debe ser texto' }),
    (0, class_validator_1.MinLength)(5, { message: 'Cellphone debe tener mínimo 5 caractere' }),
    (0, class_validator_1.MaxLength)(20, { message: 'Cellphone debe tener máximo 20 caracteres' }),
    (0, class_validator_1.IsOptional)({ message: 'Cellphone es opcional' }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "cellphone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Code debe ser texto' }),
    (0, class_validator_1.MinLength)(1, { message: 'Code debe tener mínimo 1 caracter' }),
    (0, class_validator_1.MaxLength)(50, { message: 'Code debe tener máximo 50 caracteres' }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'codeSniese debe ser texto' }),
    (0, class_validator_1.MinLength)(1, { message: 'codeSniese debe tener mínimo 1 caracter' }),
    (0, class_validator_1.MaxLength)(50, { message: 'codeSniese debe tener máximo 50 caracteres' }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "codeSniese", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'denomination debe ser texto' }),
    (0, class_validator_1.MinLength)(1, { message: 'denomination debe tener mínimo 1 caracter' }),
    (0, class_validator_1.MaxLength)(255, { message: 'denomination debe tener máximo 255 caracteres' }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "denomination", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)({ message: 'email es opcional' }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'logo debe ser texto' }),
    (0, class_validator_1.IsOptional)({ message: 'logo es opcional' }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'name debe ser texto' }),
    (0, class_validator_1.MaxLength)(255, { message: 'name debe tener máximo 255 caracteres' }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsPositive)({ message: 'numberStudents debe ser un número positivo' }),
    __metadata("design:type", Number)
], CreateInstitutionDto.prototype, "numberStudents", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'phone debe ser texto' }),
    (0, class_validator_1.MinLength)(5, { message: 'phone debe tener mínimo 5 caracteres' }),
    (0, class_validator_1.MaxLength)(20, { message: 'phone debe tener máximo 5 caracteres' }),
    (0, class_validator_1.IsOptional)({ message: 'phone es opcional' }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'shortName debe ser texto' }),
    (0, class_validator_1.MaxLength)(255, { message: 'shortName debe tener máximo 255 caracteres' }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "shortName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'slogan debe ser texto' }),
    (0, class_validator_1.MinLength)(1, { message: 'slogan debe tener mínimo 1 caracter' }),
    (0, class_validator_1.MaxLength)(1000, { message: 'slogan debe tener máximo 1000 caracteres' }),
    (0, class_validator_1.IsOptional)({ message: 'slogan es opcional' }),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "slogan", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'web debe ser texto' }),
    (0, class_validator_1.IsOptional)({ message: 'web es opcional' }),
    (0, class_validator_1.IsUrl)({}, (0, validation_1.isEmailValidationOptions)()),
    __metadata("design:type", String)
], CreateInstitutionDto.prototype, "web", void 0);
exports.CreateInstitutionDto = CreateInstitutionDto;
//# sourceMappingURL=create-institution.dto.js.map