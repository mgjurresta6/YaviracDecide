import { UserDto } from '@auth/dto';
declare const CreateUserDto_base: import("@nestjs/common").Type<Pick<UserDto, "name" | "email" | "lastname" | "username" | "password" | "passwordChanged" | "roles">>;
export declare class CreateUserDto extends CreateUserDto_base {
}
export {};
