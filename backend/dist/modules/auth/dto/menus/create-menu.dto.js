"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMenuDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("..");
class CreateMenuDto extends (0, swagger_1.OmitType)(dto_1.BaseMenuDto, []) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.CreateMenuDto = CreateMenuDto;
//# sourceMappingURL=create-menu.dto.js.map