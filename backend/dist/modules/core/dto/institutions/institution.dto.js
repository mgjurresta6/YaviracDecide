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
exports.InstitutionDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const entities_1 = require("../../entities");
const validation_1 = require("../../../../shared/validation");
class InstitutionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { address: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, state: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, acronym: { required: true, type: () => String }, cellphone: { required: true, type: () => String }, code: { required: true, type: () => String }, codeSniese: { required: true, type: () => String }, denomination: { required: true, type: () => String }, email: { required: true, type: () => String }, logo: { required: true, type: () => String }, name: { required: true, type: () => String }, phone: { required: true, type: () => String }, shortName: { required: true, type: () => String }, slogan: { required: true, type: () => String }, web: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'address no debe estar vacío' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InstitutionDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'address no debe estar vacío' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InstitutionDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Acronym debe ser texto' }),
    (0, class_validator_1.MinLength)(3, { message: 'Acronym debe tener mínimo 2 caracteres' }),
    __metadata("design:type", String)
], InstitutionDto.prototype, "acronym", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'Cellphone debe ser texto' }),
    __metadata("design:type", String)
], InstitutionDto.prototype, "cellphone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Code debe ser texto' }),
    (0, class_validator_1.MinLength)(3, { message: 'Code debe tener mínimo 1 caracter' }),
    __metadata("design:type", String)
], InstitutionDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'codeSniese debe ser texto' }),
    __metadata("design:type", String)
], InstitutionDto.prototype, "codeSniese", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'denomination debe ser texto' }),
    __metadata("design:type", String)
], InstitutionDto.prototype, "denomination", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, (0, validation_1.isEmailValidationOptions)()),
    __metadata("design:type", String)
], InstitutionDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)({ message: 'logo debe ser texto' }),
    __metadata("design:type", String)
], InstitutionDto.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'name debe ser texto' }),
    __metadata("design:type", String)
], InstitutionDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ message: 'phone es opcional' }),
    (0, class_validator_1.IsString)({ message: 'phone debe ser texto' }),
    __metadata("design:type", String)
], InstitutionDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'shortName debe ser texto' }),
    __metadata("design:type", String)
], InstitutionDto.prototype, "shortName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ message: 'slogan es opcional' }),
    (0, class_validator_1.IsString)({ message: 'slogan debe ser texto' }),
    __metadata("design:type", String)
], InstitutionDto.prototype, "slogan", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ message: 'web es opcional' }),
    (0, class_validator_1.IsString)({ message: 'web debe ser texto' }),
    (0, class_validator_1.IsUrl)({}, { message: 'web debe ser una url válida' }),
    __metadata("design:type", String)
], InstitutionDto.prototype, "web", void 0);
exports.InstitutionDto = InstitutionDto;
//# sourceMappingURL=institution.dto.js.map