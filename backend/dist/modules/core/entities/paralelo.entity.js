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
exports.ParaleloEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let ParaleloEntity = class ParaleloEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, paralelo: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ParaleloEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre',
        type: 'varchar',
        comment: 'Paralelo al que pertenece: A, B, C',
    }),
    __metadata("design:type", String)
], ParaleloEntity.prototype, "paralelo", void 0);
ParaleloEntity = __decorate([
    (0, typeorm_1.Entity)('paralelos', { schema: 'core' })
], ParaleloEntity);
exports.ParaleloEntity = ParaleloEntity;
//# sourceMappingURL=paralelo.entity.js.map