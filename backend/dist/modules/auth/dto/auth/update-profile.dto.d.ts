import { UserDto } from '@auth/dto';
declare const UpdateProfileDto_base: import("@nestjs/common").Type<Pick<UserDto, "bloodType" | "ethnicOrigin" | "identificationType" | "gender" | "maritalStatus" | "sex" | "birthdate" | "identification" | "lastname" | "name">>;
export declare class UpdateProfileDto extends UpdateProfileDto_base {
}
export {};
