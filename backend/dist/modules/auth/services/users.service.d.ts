import { Repository } from 'typeorm';
import { CreateUserDto, FilterUserDto, UpdateUserDto } from '@auth/dto';
import { UserEntity } from '@auth/entities';
import { ServiceResponseHttpModel } from '@shared/models';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(payload: CreateUserDto): Promise<ServiceResponseHttpModel>;
    catalogue(): Promise<ServiceResponseHttpModel>;
    findAll(params?: FilterUserDto): Promise<ServiceResponseHttpModel>;
    findOne(id: string): Promise<ServiceResponseHttpModel>;
    update(id: string, payload: UpdateUserDto): Promise<ServiceResponseHttpModel>;
    reactivate(id: string): Promise<ServiceResponseHttpModel>;
    remove(id: string): Promise<ServiceResponseHttpModel>;
    removeAll(payload: UserEntity[]): Promise<ServiceResponseHttpModel>;
    private paginateAndFilter;
    private filterByBirthdate;
    suspend(id: string): Promise<ServiceResponseHttpModel>;
}
