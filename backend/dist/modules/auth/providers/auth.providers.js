"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authProviders = void 0;
const entities_1 = require("../entities");
const enums_1 = require("../../../shared/enums");
exports.authProviders = [
    {
        provide: enums_1.RepositoryEnum.MENU_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.MenuEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.RepositoryEnum.PERMISSION_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.PermissionEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.RepositoryEnum.ROLE_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.RoleEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
    {
        provide: enums_1.RepositoryEnum.USER_REPOSITORY,
        useFactory: (dataSource) => dataSource.getRepository(entities_1.UserEntity),
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE],
    },
];
//# sourceMappingURL=auth.providers.js.map