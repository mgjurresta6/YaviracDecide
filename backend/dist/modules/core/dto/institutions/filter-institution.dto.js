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
exports.FilterInstitutionDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const dto_1 = require("..");
class FilterInstitutionDto extends dto_1.PaginationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { acronym: { required: true, type: () => String }, cellphone: { required: true, type: () => String }, code: { required: true, type: () => String }, codeSniese: { required: true, type: () => String }, denomination: { required: true, type: () => String }, email: { required: true, type: () => String }, logo: { required: true, type: () => String }, name: { required: true, type: () => String }, phone: { required: true, type: () => String }, shortName: { required: true, type: () => String }, slogan: { required: true, type: () => String }, web: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterInstitutionDto.prototype, "acronym", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterInstitutionDto.prototype, "cellphone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterInstitutionDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterInstitutionDto.prototype, "codeSniese", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterInstitutionDto.prototype, "denomination", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterInstitutionDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterInstitutionDto.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterInstitutionDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterInstitutionDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterInstitutionDto.prototype, "shortName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterInstitutionDto.prototype, "slogan", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterInstitutionDto.prototype, "web", void 0);
exports.FilterInstitutionDto = FilterInstitutionDto;
//# sourceMappingURL=filter-institution.dto.js.map