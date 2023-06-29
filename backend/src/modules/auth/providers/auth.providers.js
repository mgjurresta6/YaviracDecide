"use strict";
exports.__esModule = true;
exports.authProviders = void 0;
var entities_1 = require("@auth/entities");
var enums_1 = require("@shared/enums");
exports.authProviders = [
    {
        provide: enums_1.RepositoryEnum.MENU_REPOSITORY,
        useFactory: function (dataSource) {
            return dataSource.getRepository(entities_1.MenuEntity);
        },
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE]
    },
    {
        provide: enums_1.RepositoryEnum.PERMISSION_REPOSITORY,
        useFactory: function (dataSource) {
            return dataSource.getRepository(entities_1.PermissionEntity);
        },
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE]
    },
    {
        provide: enums_1.RepositoryEnum.ROLE_REPOSITORY,
        useFactory: function (dataSource) {
            return dataSource.getRepository(entities_1.RoleEntity);
        },
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE]
    },
    {
        provide: enums_1.RepositoryEnum.USER_REPOSITORY,
        useFactory: function (dataSource) {
            return dataSource.getRepository(entities_1.UserEntity);
        },
        inject: [enums_1.DataSourceEnum.PG_DATA_SOURCE]
    },
];
