"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCareerDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("..");
class UpdateCareerDto extends (0, swagger_1.PartialType)(dto_1.CreateCareerDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateCareerDto = UpdateCareerDto;
//# sourceMappingURL=update-career.dto.js.map