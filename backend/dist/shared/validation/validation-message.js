"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumberValidationOptions = exports.isBooleanValidationOptions = exports.isEmailValidationOptions = exports.isEnumValidationOptions = exports.maxLengthValidationOptions = exports.isNotEmptyValidationOptions = exports.minLengthValidationOptions = exports.isStringValidationOptions = void 0;
function isStringValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser una cadena',
    };
}
exports.isStringValidationOptions = isStringValidationOptions;
function minLengthValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser mayor o igual a $constraint1 caracteres',
    };
}
exports.minLengthValidationOptions = minLengthValidationOptions;
function isNotEmptyValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property no debe estar vacío',
    };
}
exports.isNotEmptyValidationOptions = isNotEmptyValidationOptions;
function maxLengthValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser menor o igual a $constraint1 caracteres',
    };
}
exports.maxLengthValidationOptions = maxLengthValidationOptions;
function isEnumValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser un valor de enum válido',
    };
}
exports.isEnumValidationOptions = isEnumValidationOptions;
function isEmailValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser un correo electrónico',
    };
}
exports.isEmailValidationOptions = isEmailValidationOptions;
function isBooleanValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser un valor booleano',
    };
}
exports.isBooleanValidationOptions = isBooleanValidationOptions;
function isNumberValidationOptions(validationOptions) {
    return {
        message: 'La propiedad $property debe ser un número',
    };
}
exports.isNumberValidationOptions = isNumberValidationOptions;
//# sourceMappingURL=validation-message.js.map