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
exports.ReadUserDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const dto_1 = require("..");
let ReadUserDto = class ReadUserDto extends dto_1.UserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object }, email: { required: true, type: () => Object }, activatedAt: { required: true, type: () => Object }, lastname: { required: true, type: () => Object }, maxAttempts: { required: true, type: () => Object }, name: { required: true, type: () => Object }, roles: { required: true, type: () => Object }, suspendedAt: { required: true, type: () => Object }, username: { required: true, type: () => Object } };
    }
};
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadUserDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadUserDto.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadUserDto.prototype, "activatedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadUserDto.prototype, "lastname", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadUserDto.prototype, "maxAttempts", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadUserDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadUserDto.prototype, "roles", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadUserDto.prototype, "suspendedAt", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadUserDto.prototype, "username", void 0);
ReadUserDto = __decorate([
    (0, class_transformer_1.Exclude)()
], ReadUserDto);
exports.ReadUserDto = ReadUserDto;
//# sourceMappingURL=read-user.dto.js.map