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
exports.CreateStudentDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateStudentDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, userid: { required: true, type: () => String }, studentid: { required: true, type: () => String } };
    }
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'El campo debe ser de tipo string' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'El campo userId debe ser un numero' }),
    (0, class_validator_1.IsPositive)({ message: 'El campo userId debe ser un entero positivo' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "userid", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'studentId Tiene que ser de tipo numero' }),
    (0, class_validator_1.IsPositive)({ message: 'studentId debe ser un entero positivo' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "studentid", void 0);
exports.CreateStudentDto = CreateStudentDto;
//# sourceMappingURL=create-student.dto.js.map