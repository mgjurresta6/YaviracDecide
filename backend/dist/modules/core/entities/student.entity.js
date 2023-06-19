"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const entities_1 = require("../../auth/entities");
let StudentEntity = class StudentEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, name: { required: true, type: () => String }, user: { required: true, type: () => require("../../auth/entities/user.entity").UserEntity } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], StudentEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', comment: 'Nombre del estudiante' }),
    __metadata("design:type", String)
], StudentEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_1.UserEntity, (user) => user.student),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", entities_1.UserEntity)
], StudentEntity.prototype, "user", void 0);
StudentEntity = __decorate([
    (0, typeorm_1.Entity)('students', { schema: 'core' })
], StudentEntity);
exports.StudentEntity = StudentEntity;
//# sourceMappingURL=student.entity.js.map