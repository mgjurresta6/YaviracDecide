import { ValidationOptions } from 'class-validator/types/decorator/ValidationOptions';
export declare function isStringValidationOptions(validationOptions?: ValidationOptions): {
    message: string;
};
export declare function minLengthValidationOptions(validationOptions?: ValidationOptions): {
    message: string;
};
export declare function isNotEmptyValidationOptions(validationOptions?: ValidationOptions): {
    message: string;
};
export declare function maxLengthValidationOptions(validationOptions?: ValidationOptions): {
    message: string;
};
export declare function isEnumValidationOptions(validationOptions?: ValidationOptions): {
    message: string;
};
export declare function isEmailValidationOptions(validationOptions?: ValidationOptions): {
    message: string;
};
export declare function isBooleanValidationOptions(validationOptions?: ValidationOptions): {
    message: string;
};
export declare function isNumberValidationOptions(validationOptions?: ValidationOptions): {
    message: string;
};
