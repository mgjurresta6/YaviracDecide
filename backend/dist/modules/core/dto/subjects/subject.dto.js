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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const entities_1 = require("../../entities");
class SubjectDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { academicPeriod: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, curriculum: { required: true, type: () => Object }, state: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, type: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, autonomousHour: { required: true, type: () => Number }, code: { required: true, type: () => String }, credit: { required: true, type: () => Number }, name: { required: true, type: () => String }, practicalHour: { required: true, type: () => Number }, scale: { required: true, type: () => Number }, teacherHour: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo academicPeriod es obligatorio' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], SubjectDto.prototype, "academicPeriod", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo curriculum es obligatorio' }),
    __metadata("design:type", typeof (_a = typeof entities_1.CurriculumEntity !== "undefined" && entities_1.CurriculumEntity) === "function" ? _a : Object)
], SubjectDto.prototype, "curriculum", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo state es obligatorio' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], SubjectDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo state es obligatorio' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], SubjectDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'El campo autonomousHours debe ser un número' }),
    (0, class_validator_1.Min)(0, { message: 'El campo autonomousHours debe tener mínimo 0' }),
    __metadata("design:type", Number)
], SubjectDto.prototype, "autonomousHour", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El campo code debe ser un string' }),
    (0, class_validator_1.MinLength)(5, { message: 'El campo code debe tener mínimo 5 caracteres' }),
    __metadata("design:type", String)
], SubjectDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo credit debe ser un número' }),
    (0, class_validator_1.Min)(0, { message: 'El campo credit debe tener mínimo 0' }),
    __metadata("design:type", Number)
], SubjectDto.prototype, "credit", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El campo name debe ser un string' }),
    __metadata("design:type", String)
], SubjectDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'El campo practicalHour debe ser un número' }),
    (0, class_validator_1.Min)(0, { message: 'El campo practicalHour debe tener minimo 0' }),
    __metadata("design:type", Number)
], SubjectDto.prototype, "practicalHour", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'El campo scale debe ser un número' }),
    (0, class_validator_1.Min)(0, { message: 'El campo scale debe tener mínimo 0' }),
    (0, class_validator_1.Max)(1, { message: 'El campo scale debe tener maximo 1' }),
    __metadata("design:type", Number)
], SubjectDto.prototype, "scale", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'El campo teacherHour debe ser un número' }),
    (0, class_validator_1.Min)(0, { message: 'El campo teacherHour debe tener mínimo 0' }),
    __metadata("design:type", Number)
], SubjectDto.prototype, "teacherHour", void 0);
exports.SubjectDto = SubjectDto;
//# sourceMappingURL=subject.dto.js.map