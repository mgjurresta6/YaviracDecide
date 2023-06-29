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
exports.ReadProfileDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const dto_1 = require("..");
let ReadProfileDto = class ReadProfileDto extends dto_1.UserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object }, birthdate: { required: true, type: () => Object }, bloodType: { required: true, type: () => Object }, ethnicOrigin: { required: true, type: () => Object }, gender: { required: true, type: () => Object }, identification: { required: true, type: () => Object }, identificationType: { required: true, type: () => Object }, lastname: { required: true, type: () => Object }, maritalStatus: { required: true, type: () => Object }, name: { required: true, type: () => Object }, sex: { required: true, type: () => Object } };
    }
};
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadProfileDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadProfileDto.prototype, "birthdate", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadProfileDto.prototype, "bloodType", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadProfileDto.prototype, "ethnicOrigin", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadProfileDto.prototype, "gender", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadProfileDto.prototype, "identification", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadProfileDto.prototype, "identificationType", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadProfileDto.prototype, "lastname", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadProfileDto.prototype, "maritalStatus", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadProfileDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadProfileDto.prototype, "sex", void 0);
ReadProfileDto = __decorate([
    (0, class_transformer_1.Exclude)()
], ReadProfileDto);
exports.ReadProfileDto = ReadProfileDto;
//# sourceMappingURL=read-profile.dto.js.map