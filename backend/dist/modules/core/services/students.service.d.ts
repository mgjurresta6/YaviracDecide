import { Repository } from 'typeorm';
import { CreateStudentDto, FilterStudentDto, UpdateStudentDto } from '@core/dto';
import { StudentEntity } from '@core/entities';
export declare class StudentsService {
    private repository;
    constructor(repository: Repository<StudentEntity>);
    create(payload: CreateStudentDto): Promise<StudentEntity>;
    catalogue(): Promise<{
        pagination: {
            totalItems: number;
            limit: number;
        };
        data: StudentEntity[];
    }>;
    findAll(params?: FilterStudentDto): Promise<{
        pagination: {
            limit: number;
            totalItems: number;
        };
        data: StudentEntity[];
    }>;
    findOne(id: string): Promise<StudentEntity>;
    update(id: string, payload: UpdateStudentDto): Promise<StudentEntity>;
    remove(id: string): Promise<StudentEntity>;
    removeAll(payload: StudentEntity[]): Promise<StudentEntity[]>;
    private paginateAndFilter;
}
