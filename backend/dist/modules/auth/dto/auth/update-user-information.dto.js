"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserInformationDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("..");
class UpdateUserInformationDto extends (0, swagger_1.PickType)(dto_1.UserDto, [
    'email',
    'phone',
    'username',
]) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateUserInformationDto = UpdateUserInformationDto;
//# sourceMappingURL=update-user-information.dto.js.map