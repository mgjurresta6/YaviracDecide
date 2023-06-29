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
exports.CatalogueDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const enums_1 = require("../../../../shared/enums");
const validation_1 = require("../../../../shared/validation");
class CatalogueDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { code: { required: true, type: () => String }, description: { required: true, type: () => String, minLength: 5 }, name: { required: true, type: () => String }, state: { required: true, type: () => String, enum: require("../../../../shared/enums/catalogue.enum").CatalogueStateEnum }, type: { required: true, enum: require("../../../../shared/enums/catalogue.enum").CatalogueTypeEnum } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], CatalogueDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    (0, class_validator_1.MinLength)(5, (0, validation_1.minLengthValidationOptions)()),
    __metadata("design:type", String)
], CatalogueDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], CatalogueDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(enums_1.CatalogueStateEnum, (0, validation_1.isEnumValidationOptions)()),
    __metadata("design:type", String)
], CatalogueDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)()),
    __metadata("design:type", String)
], CatalogueDto.prototype, "type", void 0);
exports.CatalogueDto = CatalogueDto;
//# sourceMappingURL=catalogue.dto.js.map