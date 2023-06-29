import { Strategy } from 'passport-jwt';
import { UsersService } from '@auth/services';
import { config } from '@config';
import { ConfigType } from '@nestjs/config';
import { PayloadTokenModel } from '@auth/models';
import { UserEntity } from '@auth/entities';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UsersService, configService: ConfigType<typeof config>);
    validate(payload: PayloadTokenModel): Promise<UserEntity>;
}
export {};
