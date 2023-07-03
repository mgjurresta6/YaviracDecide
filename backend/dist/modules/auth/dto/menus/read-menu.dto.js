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
exports.ReadMenuDto = void 0;
const openapi = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const dto_1 = require("..");
let ReadMenuDto = class ReadMenuDto extends dto_1.BaseMenuDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Object }, icon: { required: true, type: () => Object }, isVisible: { required: true, type: () => Object }, name: { required: true, type: () => Object }, routerLink: { required: true, type: () => Object }, type: { required: true, type: () => Object } };
    }
};
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadMenuDto.prototype, "id", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadMenuDto.prototype, "icon", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadMenuDto.prototype, "isVisible", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadMenuDto.prototype, "name", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadMenuDto.prototype, "routerLink", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ReadMenuDto.prototype, "type", void 0);
ReadMenuDto = __decorate([
    (0, class_transformer_1.Exclude)()
], ReadMenuDto);
exports.ReadMenuDto = ReadMenuDto;
//# sourceMappingURL=read-menu.dto.js.map