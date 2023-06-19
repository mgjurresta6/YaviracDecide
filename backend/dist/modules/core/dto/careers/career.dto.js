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
exports.CareerDto = void 0;
const openapi = require("@nestjs/swagger");
const entities_1 = require("../../entities");
const class_validator_1 = require("class-validator");
const validation_1 = require("../../../../shared/validation");
class CareerDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { institution: { required: true, type: () => require("../../entities/institution.entity").InstitutionEntity }, modality: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, state: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, type: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, acronym: { required: true, type: () => String }, code: { required: true, type: () => String }, codeSniese: { required: true, type: () => String }, degree: { required: true, type: () => String }, logo: { required: true, type: () => String }, name: { required: true, type: () => String }, resolutionNumber: { required: true, type: () => String }, shortName: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
    __metadata("design:type", entities_1.InstitutionEntity)
], CareerDto.prototype, "institution", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
    __metadata("design:type", entities_1.CatalogueEntity)
], CareerDto.prototype, "modality", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
    __metadata("design:type", entities_1.CatalogueEntity)
], CareerDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], CareerDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    (0, class_validator_1.MinLength)(3, (0, validation_1.minLengthValidationOptions)()),
    (0, class_validator_1.MaxLength)(10, (0, validation_1.maxLengthValidationOptions)()),
    __metadata("design:type", String)
], CareerDto.prototype, "acronym", void 0);
__decorate([
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    (0, class_validator_1.MinLength)(3, (0, validation_1.minLengthValidationOptions)()),
    (0, class_validator_1.MaxLength)(20, (0, validation_1.maxLengthValidationOptions)()),
    __metadata("design:type", String)
], CareerDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], CareerDto.prototype, "codeSniese", void 0);
__decorate([
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], CareerDto.prototype, "degree", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], CareerDto.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], CareerDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], CareerDto.prototype, "resolutionNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], CareerDto.prototype, "shortName", void 0);
exports.CareerDto = CareerDto;
//# sourceMappingURL=career.dto.js.map