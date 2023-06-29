"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BaseMenuDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var validation_1 = require("@shared/validation");
var BaseMenuDto = /** @class */ (function () {
    function BaseMenuDto() {
    }
    BaseMenuDto._OPENAPI_METADATA_FACTORY = function () {
        return { parent: { required: true, type: function () { return Object; } }, children: { required: true, type: function () { return [Object]; } }, code: { required: true, type: function () { return String; } }, icon: { required: true, type: function () { return String; } }, isVisible: { required: true, type: function () { return Boolean; } }, label: { required: true, type: function () { return String; } }, routerLink: { required: true, type: function () { return String; } }, type: { required: true, type: function () { return Object; } } };
    };
    __decorate([
        (0, class_validator_1.IsOptional)()
    ], BaseMenuDto.prototype, "parent");
    __decorate([
        (0, class_validator_1.IsOptional)()
    ], BaseMenuDto.prototype, "children");
    __decorate([
        (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
        (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)())
    ], BaseMenuDto.prototype, "code");
    __decorate([
        (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
        (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)())
    ], BaseMenuDto.prototype, "icon");
    __decorate([
        (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
        (0, class_validator_1.IsBoolean)((0, validation_1.isBooleanValidationOptions)())
    ], BaseMenuDto.prototype, "isVisible");
    __decorate([
        (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
        (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)())
    ], BaseMenuDto.prototype, "label");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)())
    ], BaseMenuDto.prototype, "routerLink");
    __decorate([
        (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
        (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)())
    ], BaseMenuDto.prototype, "type");
    return BaseMenuDto;
}());
exports.BaseMenuDto = BaseMenuDto;
