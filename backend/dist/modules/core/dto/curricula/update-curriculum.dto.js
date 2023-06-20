"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCurriculumDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("..");
class UpdateCurriculumDto extends (0, swagger_1.PartialType)(dto_1.CreateCurriculumDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateCurriculumDto = UpdateCurriculumDto;
//# sourceMappingURL=update-curriculum.dto.js.map