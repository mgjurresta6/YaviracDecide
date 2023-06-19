import { UserDto } from '@auth/dto';
declare const CreateUserDto_base: import("@nestjs/common").Type<Pick<UserDto, "username" | "password" | "name" | "email" | "roles" | "lastname" | "passwordChanged">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
export {};
