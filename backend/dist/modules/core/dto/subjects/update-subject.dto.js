"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSubjectDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const dto_1 = require("..");
class UpdateSubjectDto extends (0, mapped_types_1.PartialType)(dto_1.CreateSubjectDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateSubjectDto = UpdateSubjectDto;
//# sourceMappingURL=update-subject.dto.js.map