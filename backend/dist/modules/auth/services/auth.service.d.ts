import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { UserEntity } from '@auth/entities';
import { LoginDto, PasswordChangeDto, UpdateProfileDto, UpdateUserInformationDto } from '@auth/dto';
import { ServiceResponseHttpModel } from '@shared/models';
import { UsersService } from '@auth/services';
export declare class AuthService {
    private repository;
    private readonly userService;
    private jwtService;
    constructor(repository: Repository<UserEntity>, userService: UsersService, jwtService: JwtService);
    changePassword(id: string, payload: PasswordChangeDto): Promise<{
        data: boolean;
    }>;
    login(payload: LoginDto): Promise<{
        data: {
            accessToken: string;
            user: UserEntity;
        };
    }>;
    findProfile(id: string): Promise<ServiceResponseHttpModel>;
    findUserInformation(id: string): Promise<ServiceResponseHttpModel>;
    updateUserInformation(id: string, payload: UpdateUserInformationDto): Promise<ServiceResponseHttpModel>;
    updateProfile(id: string, payload: UpdateProfileDto): Promise<ServiceResponseHttpModel>;
    refreshToken(user: UserEntity): {
        data: {
            accessToken: string;
            user: UserEntity;
        };
    };
    private generateJwt;
    private findByUsername;
    private checkPassword;
}
