import { UserDto } from '@auth/dto';
<<<<<<< HEAD
declare const CreateUserDto_base: import("@nestjs/common").Type<Pick<UserDto, "roles" | "email" | "lastname" | "password" | "passwordChanged" | "name" | "username">>;
=======
declare const CreateUserDto_base: import("@nestjs/common").Type<Pick<UserDto, "name" | "email" | "roles" | "lastname" | "password" | "passwordChanged" | "username">>;
>>>>>>> backend
export declare class CreateUserDto extends CreateUserDto_base {
}
export {};
