"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfileDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("..");
class UpdateProfileDto extends (0, swagger_1.PickType)(dto_1.UserDto, [
    'bloodType',
    'ethnicOrigin',
    'identificationType',
    'gender',
    'maritalStatus',
    'sex',
    'birthdate',
    'identification',
    'lastname',
    'name',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateProfileDto = UpdateProfileDto;
//# sourceMappingURL=update-profile.dto.js.map