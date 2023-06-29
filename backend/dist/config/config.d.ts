export declare const config: (() => {
    database: {
        database: string;
        host: string;
        password: string;
        port: number;
        schemaAuth: string;
        schemaCore: string;
        username: string;
    };
    apiKey: string;
    jwtSecret: string;
    port: number;
    defaultUser: {
        username: string;
        email: string;
        password: string;
    };
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    database: {
        database: string;
        host: string;
        password: string;
        port: number;
        schemaAuth: string;
        schemaCore: string;
        username: string;
    };
    apiKey: string;
    jwtSecret: string;
    port: number;
    defaultUser: {
        username: string;
        email: string;
        password: string;
    };
}>;
