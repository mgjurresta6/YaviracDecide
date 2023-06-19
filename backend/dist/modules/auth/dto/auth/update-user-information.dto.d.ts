import { UserDto } from '@auth/dto';
declare const UpdateUserInformationDto_base: import("@nestjs/common").Type<Pick<UserDto, "username" | "email" | "phone">>;
export declare class UpdateUserInformationDto extends UpdateUserInformationDto_base {
}
export {};
