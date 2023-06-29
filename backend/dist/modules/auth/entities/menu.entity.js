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
var MenuEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const menu_enum_1 = require("../enums/menu.enum");
const entities_1 = require("./");
let MenuEntity = MenuEntity_1 = class MenuEntity {
    async setCode() {
        if (!this.code) {
            return;
        }
        this.code = this.code.toLowerCase().trim();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, parent: { required: true, type: () => require("./menu.entity").MenuEntity }, children: { required: true, type: () => [require("./menu.entity").MenuEntity] }, roles: { required: true, type: () => [require("./role.entity").RoleEntity] }, code: { required: true, type: () => String }, icon: { required: true, type: () => String }, isVisible: { required: true, type: () => Boolean }, label: { required: true, type: () => String }, routerLink: { required: true, type: () => String }, type: { required: true, type: () => String, enum: require("../enums/menu.enum").MenuTypeEnum } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MenuEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], MenuEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], MenuEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamptz',
        nullable: true,
    }),
    __metadata("design:type", Date)
], MenuEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => MenuEntity_1, (category) => category.children),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id' }),
    __metadata("design:type", MenuEntity)
], MenuEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MenuEntity_1, (category) => category.parent),
    __metadata("design:type", Array)
], MenuEntity.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => entities_1.RoleEntity),
    __metadata("design:type", Array)
], MenuEntity.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'code',
        unique: true,
        comment: 'Codigo unico',
    }),
    __metadata("design:type", String)
], MenuEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'icon',
        comment: 'Icono',
    }),
    __metadata("design:type", String)
], MenuEntity.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', {
        name: 'is_visible',
        comment: 'True=es visible, False=no es visible para el usuario final',
    }),
    __metadata("design:type", Boolean)
], MenuEntity.prototype, "isVisible", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'label',
        unique: true,
        comment: 'Nombre del menu',
    }),
    __metadata("design:type", String)
], MenuEntity.prototype, "label", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'router_link',
        unique: true,
        nullable: true,
        comment: 'Nombre de la ruta',
    }),
    __metadata("design:type", String)
], MenuEntity.prototype, "routerLink", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'type',
        enum: menu_enum_1.MenuTypeEnum,
        comment: 'Tipo de menu',
    }),
    __metadata("design:type", String)
], MenuEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuEntity.prototype, "setCode", null);
MenuEntity = MenuEntity_1 = __decorate([
    (0, typeorm_1.Entity)('menus', { schema: 'auth' })
], MenuEntity);
exports.MenuEntity = MenuEntity;
//# sourceMappingURL=menu.entity.js.map