import { UserDto } from '@auth/dto';
declare const UpdateProfileDto_base: import("@nestjs/common").Type<Pick<UserDto, "name" | "birthdate" | "lastname" | "bloodType" | "ethnicOrigin" | "identificationType" | "gender" | "maritalStatus" | "sex" | "identification">>;
export declare class UpdateProfileDto extends UpdateProfileDto_base {
}
export {};
