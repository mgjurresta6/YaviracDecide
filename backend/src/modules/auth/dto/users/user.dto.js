"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var validation_1 = require("@shared/validation");
var UserDto = /** @class */ (function () {
    function UserDto() {
    }
    UserDto._OPENAPI_METADATA_FACTORY = function () {
        return { bloodType: { required: true, type: function () { return Object; } }, ethnicOrigin: { required: true, type: function () { return Object; } }, identificationType: { required: true, type: function () { return Object; } }, gender: { required: true, type: function () { return Object; } }, maritalStatus: { required: true, type: function () { return Object; } }, sex: { required: true, type: function () { return Object; } }, birthdate: { required: true, type: function () { return Date; } }, identification: { required: true, type: function () { return String; } }, email: { required: true, type: function () { return String; } }, emailVerifiedAt: { required: true, type: function () { return String; } }, lastname: { required: true, type: function () { return String; } }, password: { required: true, type: function () { return String; } }, passwordChanged: { required: true, type: function () { return Boolean; } }, personalEmail: { required: true, type: function () { return String; } }, phone: { required: true, type: function () { return String; } }, name: { required: true, type: function () { return String; } }, roles: { required: true, type: function () { return Object; } }, username: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, class_validator_1.IsOptional)()
    ], UserDto.prototype, "bloodType");
    __decorate([
        (0, class_validator_1.IsOptional)()
    ], UserDto.prototype, "ethnicOrigin");
    __decorate([
        (0, class_validator_1.IsOptional)()
    ], UserDto.prototype, "identificationType");
    __decorate([
        (0, class_validator_1.IsOptional)()
    ], UserDto.prototype, "gender");
    __decorate([
        (0, class_validator_1.IsOptional)()
    ], UserDto.prototype, "maritalStatus");
    __decorate([
        (0, class_validator_1.IsOptional)()
    ], UserDto.prototype, "sex");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsDate)((0, validation_1.isNotEmptyValidationOptions)())
    ], UserDto.prototype, "birthdate");
    __decorate([
        (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
        (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)())
    ], UserDto.prototype, "identification");
    __decorate([
        (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
        (0, class_validator_1.IsEmail)({}, (0, validation_1.isEmailValidationOptions)()),
        (0, class_validator_1.MaxLength)(150, (0, validation_1.maxLengthValidationOptions)())
    ], UserDto.prototype, "email");
    __decorate([
        (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
        (0, class_validator_1.IsEmail)({}, (0, validation_1.isEmailValidationOptions)()),
        (0, class_validator_1.MaxLength)(150, (0, validation_1.maxLengthValidationOptions)())
    ], UserDto.prototype, "emailVerifiedAt");
    __decorate([
        (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
        (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)())
    ], UserDto.prototype, "lastname");
    __decorate([
        (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.MinLength)(8, (0, validation_1.minLengthValidationOptions)()),
        (0, class_validator_1.MaxLength)(32, (0, validation_1.minLengthValidationOptions)())
    ], UserDto.prototype, "password");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsBoolean)((0, validation_1.isBooleanValidationOptions)())
    ], UserDto.prototype, "passwordChanged");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsEmail)({}, (0, validation_1.isEmailValidationOptions)()),
        (0, class_validator_1.MaxLength)(150, (0, validation_1.maxLengthValidationOptions)())
    ], UserDto.prototype, "personalEmail");
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.MaxLength)(20, (0, validation_1.minLengthValidationOptions)())
    ], UserDto.prototype, "phone");
    __decorate([
        (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
        (0, class_validator_1.IsString)((0, validation_1.isStringValidationOptions)())
    ], UserDto.prototype, "name");
    __decorate([
        (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)())
    ], UserDto.prototype, "roles");
    __decorate([
        (0, class_validator_1.IsNotEmpty)((0, validation_1.isNotEmptyValidationOptions)()),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.MinLength)(5, (0, validation_1.minLengthValidationOptions)()),
        (0, class_validator_1.MaxLength)(100, (0, validation_1.maxLengthValidationOptions)())
    ], UserDto.prototype, "username");
    return UserDto;
}());
exports.UserDto = UserDto;
