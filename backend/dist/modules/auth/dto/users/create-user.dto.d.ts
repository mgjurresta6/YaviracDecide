import { UserDto } from '@auth/dto';
declare const CreateUserDto_base: import("@nestjs/common").Type<Pick<UserDto, "roles" | "email" | "lastname" | "password" | "passwordChanged" | "name" | "username">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
export {};
