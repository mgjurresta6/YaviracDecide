"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FilterUserDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var dto_1 = require("@core/dto");
var FilterUserDto = /** @class */ (function (_super) {
    __extends(FilterUserDto, _super);
    function FilterUserDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterUserDto._OPENAPI_METADATA_FACTORY = function () {
        return { birthdate: { required: true, type: function () { return Date; } }, email: { required: true, type: function () { return String; } }, lastname: { required: true, type: function () { return String; } }, name: { required: true, type: function () { return String; } }, username: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsDate)()
    ], FilterUserDto.prototype, "birthdate");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], FilterUserDto.prototype, "email");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], FilterUserDto.prototype, "lastname");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], FilterUserDto.prototype, "name");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)()
    ], FilterUserDto.prototype, "username");
    return FilterUserDto;
}(dto_1.PaginationDto));
exports.FilterUserDto = FilterUserDto;
