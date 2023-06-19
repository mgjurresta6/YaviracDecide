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
exports.CurriculumDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const entities_1 = require("../../entities");
class CurriculumDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { career: { required: true, type: () => Object }, state: { required: true, type: () => require("../../entities/catalogue.entity").CatalogueEntity }, code: { required: true, type: () => String }, description: { required: true, type: () => String }, endedAt: { required: true, type: () => Date }, name: { required: true, type: () => String }, periodicAcademicNumber: { required: true, type: () => Number }, resolutionNumber: { required: true, type: () => String }, startedAt: { required: true, type: () => Date }, weeksNumber: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof entities_1.CareerEntity !== "undefined" && entities_1.CareerEntity) === "function" ? _a : Object)
], CurriculumDto.prototype, "career", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", entities_1.CatalogueEntity)
], CurriculumDto.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'el campo code es de tipo string' }),
    (0, class_validator_1.MinLength)(3, { message: ' el campo code minimo 3 caracteres' }),
    __metadata("design:type", String)
], CurriculumDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: ' el campo description es de tipo string' }),
    (0, class_validator_1.MinLength)(10, { message: '  el campo description minimo 2 caracteres' }),
    __metadata("design:type", String)
], CurriculumDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ message: ' el campo endedAt debe ser opcional' }),
    (0, class_validator_1.IsDate)({ message: ' el campo endedAt debe ser una fecha' }),
    __metadata("design:type", Date)
], CurriculumDto.prototype, "endedAt", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: ' el campo name es de tipo string' }),
    __metadata("design:type", String)
], CurriculumDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsPositive)({ message: ' el campo periodicAcademicNumber es positivo' }),
    __metadata("design:type", Number)
], CurriculumDto.prototype, "periodicAcademicNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: ' el campo resolutionNumber es de tipo string' }),
    __metadata("design:type", String)
], CurriculumDto.prototype, "resolutionNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ message: 'el campo startedAt es opcional' }),
    (0, class_validator_1.IsDate)({ message: ' el campo startedAt de tipo Date' }),
    __metadata("design:type", Date)
], CurriculumDto.prototype, "startedAt", void 0);
__decorate([
    (0, class_validator_1.IsPositive)({ message: ' el campo weeksNumber debe ser positivo' }),
    __metadata("design:type", Number)
], CurriculumDto.prototype, "weeksNumber", void 0);
exports.CurriculumDto = CurriculumDto;
//# sourceMappingURL=curriculum.dto.js.map