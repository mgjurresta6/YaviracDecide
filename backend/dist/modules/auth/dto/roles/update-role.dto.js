"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const role_dto_1 = require("./role.dto");
class UpdateRoleDto extends (0, swagger_1.PartialType)(role_dto_1.RoleDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateRoleDto = UpdateRoleDto;
//# sourceMappingURL=update-role.dto.js.map