"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const _interceptors_1 = require("./interceptors");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe({
        errorHttpStatusCode: 422,
        stopAtFirstError: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)), new _interceptors_1.ResponseHttpInterceptor());
    app.setGlobalPrefix('api/v1');
    const documentBuilder = new swagger_1.DocumentBuilder()
        .setTitle('API IGNUG')
        .setDescription('App description')
        .setVersion('2')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, documentBuilder);
    swagger_1.SwaggerModule.setup('docs', app, document);
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map