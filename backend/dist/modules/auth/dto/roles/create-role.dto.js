"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const role_dto_1 = require("./role.dto");
class CreateRoleDto extends (0, swagger_1.PickType)(role_dto_1.RoleDto, ['code', 'name']) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateRoleDto = CreateRoleDto;
//# sourceMappingURL=create-role.dto.js.map