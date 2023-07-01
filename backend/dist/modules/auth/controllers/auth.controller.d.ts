import { AuthService } from '@auth/services';
import { UserEntity } from '@auth/entities';
import { LoginDto, PasswordChangeDto, UpdateUserInformationDto, UpdateProfileDto } from '@auth/dto';
import { ResponseHttpModel } from '@shared/models';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(payload: LoginDto): Promise<ResponseHttpModel>;
    changePassword(id: string, payload: PasswordChangeDto): Promise<ResponseHttpModel>;
    findProfile(user: UserEntity): Promise<ResponseHttpModel>;
    findUserInformation(user: UserEntity): Promise<ResponseHttpModel>;
    updateProfile(user: UserEntity, payload: UpdateProfileDto): Promise<ResponseHttpModel>;
    updateUserInformation(id: string, payload: UpdateUserInformationDto): Promise<ResponseHttpModel>;
    refreshToken(user: UserEntity): {
        data: {
            accessToken: string;
            user: UserEntity;
        };
        message: string;
        title: string;
    };
}
