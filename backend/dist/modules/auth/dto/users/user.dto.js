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
exports.UserDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const validation_1 = require("../../../../shared/validation");
const entities_1 = require("../../../core/entities");
class UserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { bloodType: { required: true, type: () => require("../../../core/entities/catalogue.entity").CatalogueEntity }, ethnicOrigin: { required: true, type: () => require("../../../core/entities/catalogue.entity").CatalogueEntity }, identificationType: { required: true, type: () => require("../../../core/entities/catalogue.entity").CatalogueEntity }, gender: { required: true, type: () => require("../../../core/entities/catalogue.entity").CatalogueEntity }, maritalStatus: { required: true, type: () => require("../../../core/entities/catalogue.entity").CatalogueEntity }, sex: { required: true, type: () => require("../../../core/entities/catalogue.entity").CatalogueEntity }, birthdate: { required: true, type: () => Date }, identification: { required: true, type: () => String }, email: { required: true, type: () => String, maxLength: 150 }, emailVerifiedAt: { required: true, type: () => String, maxLength: 150 }, lastname: { required: true, type: () => String }, password: { required: true, type: () => String, minLength: 8, maxLength: 32 }, passwordChanged: { required: true, type: () => Boolean }, personalEmail: { required: true, type: () => String, maxLength: 150 }, phone: { required: true, type: () => String, maxLength: 20 }, name: { required: true, type: () => String }, roles: { required: true, type: () => Object }, username: { required: true, type: () => String, minLength: 5, maxLength: 100 } };
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], UserDto.prototype, "bloodType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], UserDto.prototype, "ethnicOrigin", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], UserDto.prototype, "identificationType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], UserDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], UserDto.prototype, "maritalStatus", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], UserDto.prototype, "sex", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDate)((0, validation_1.isNotEmptyValidationOptions)()),
    __metadata("design:type", Date)
], UserDto.prototype, "birthdate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "identification", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsEmail)({}, (0, validation_1.isEmailValidationOptions)()),
    (0, class_validator_1.MaxLength)(150, (0, validation_1.maxLengthValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsEmail)({}, (0, validation_1.isEmailValidationOptions)()),
    (0, class_validator_1.MaxLength)(150, (0, validation_1.maxLengthValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "emailVerifiedAt", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "lastname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8, (0, validation_1.minLengthValidationOptions)()),
    (0, class_validator_1.MaxLength)(32, (0, validation_1.minLengthValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)((0, validation_1.isBooleanValidationOptions)()),
    __metadata("design:type", Boolean)
], UserDto.prototype, "passwordChanged", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)({}, (0, validation_1.isEmailValidationOptions)()),
    (0, class_validator_1.MaxLength)(150, (0, validation_1.maxLengthValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "personalEmail", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(20, (0, validation_1.minLengthValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
    __metadata("design:type", Object)
], UserDto.prototype, "roles", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5, (0, validation_1.minLengthValidationOptions)()),
    (0, class_validator_1.MaxLength)(100, (0, validation_1.maxLengthValidationOptions)()),
    __metadata("design:type", String)
], UserDto.prototype, "username", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map