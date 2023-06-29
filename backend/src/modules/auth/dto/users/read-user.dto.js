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
exports.ReadUserDto = void 0;
var openapi = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var dto_1 = require("@auth/dto");
var ReadUserDto = /** @class */ (function (_super) {
    __extends(ReadUserDto, _super);
    function ReadUserDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReadUserDto._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Object; } }, email: { required: true, type: function () { return Object; } }, activatedAt: { required: true, type: function () { return Object; } }, lastname: { required: true, type: function () { return Object; } }, maxAttempts: { required: true, type: function () { return Object; } }, name: { required: true, type: function () { return Object; } }, roles: { required: true, type: function () { return Object; } }, suspendedAt: { required: true, type: function () { return Object; } }, username: { required: true, type: function () { return Object; } } };
    };
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadUserDto.prototype, "id");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadUserDto.prototype, "email");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadUserDto.prototype, "activatedAt");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadUserDto.prototype, "lastname");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadUserDto.prototype, "maxAttempts");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadUserDto.prototype, "name");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadUserDto.prototype, "roles");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadUserDto.prototype, "suspendedAt");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadUserDto.prototype, "username");
    ReadUserDto = __decorate([
        (0, class_transformer_1.Exclude)()
    ], ReadUserDto);
    return ReadUserDto;
}(dto_1.UserDto));
exports.ReadUserDto = ReadUserDto;
