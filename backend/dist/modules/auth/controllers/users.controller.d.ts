import { CreateUserDto, FilterUserDto, UpdateUserDto } from '@auth/dto';
import { UserEntity } from '@auth/entities';
import { UsersService } from '@auth/services';
import { ResponseHttpModel } from '@shared/models';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(payload: CreateUserDto): Promise<ResponseHttpModel>;
    catalogue(): Promise<ResponseHttpModel>;
    findAll(params: FilterUserDto): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateUserDto): Promise<ResponseHttpModel>;
    reactivate(id: string): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: UserEntity[]): Promise<ResponseHttpModel>;
    suspend(id: string): Promise<ResponseHttpModel>;
}
