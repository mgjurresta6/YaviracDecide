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
exports.FilterCareerDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const dto_1 = require("..");
class FilterCareerDto extends dto_1.PaginationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { acronym: { required: true, type: () => String }, code: { required: true, type: () => String }, codeSniese: { required: true, type: () => String }, logo: { required: true, type: () => String }, name: { required: true, type: () => String }, resolutionNumber: { required: true, type: () => Number }, shortName: { required: true, type: () => String }, title: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'El campo acronym debe ser un string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterCareerDto.prototype, "acronym", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El campo code debe ser un string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterCareerDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El campo codeSniese debe ser un string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterCareerDto.prototype, "codeSniese", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El campo logo debe ser un string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterCareerDto.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El campo name debe ser un string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterCareerDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'El campo resolutionNumber debe ser un numero' }),
    __metadata("design:type", Number)
], FilterCareerDto.prototype, "resolutionNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El campo shortName debe ser un string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterCareerDto.prototype, "shortName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El campo title debe ser un string' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FilterCareerDto.prototype, "title", void 0);
exports.FilterCareerDto = FilterCareerDto;
//# sourceMappingURL=filter-career.dto.js.map