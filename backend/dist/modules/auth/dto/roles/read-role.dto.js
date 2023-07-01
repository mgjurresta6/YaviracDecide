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
exports.ReadRoleDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const role_dto_1 = require("./role.dto");
let ReadRoleDto = class ReadRoleDto extends role_dto_1.RoleDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object }, code: { required: true, type: () => Object }, name: { required: true, type: () => Object } };
    }
};
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadRoleDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadRoleDto.prototype, "code", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadRoleDto.prototype, "name", void 0);
ReadRoleDto = __decorate([
    (0, class_transformer_1.Exclude)()
], ReadRoleDto);
exports.ReadRoleDto = ReadRoleDto;
//# sourceMappingURL=read-role.dto.js.map