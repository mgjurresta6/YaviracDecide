"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("..");
class CreateUserDto extends (0, swagger_1.PickType)(dto_1.UserDto, [
    'email',
    'lastname',
    'name',
    'password',
    'passwordChanged',
    'roles',
    'username',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map