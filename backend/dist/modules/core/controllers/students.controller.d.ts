import { ResponseHttpModel } from '@shared/models';
import { StudentsService } from '@core/services';
import { CreateStudentDto, FilterStudentDto, UpdateStudentDto } from '@core/dto';
import { StudentEntity } from '@core/entities';
export declare class StudentsController {
    private studentService;
    constructor(studentService: StudentsService);
    create(payload: CreateStudentDto): Promise<ResponseHttpModel>;
    catalogue(): Promise<ResponseHttpModel>;
    findAll(params: FilterStudentDto): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateStudentDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: StudentEntity[]): Promise<{
        data: StudentEntity[];
        message: string;
        title: string;
    }>;
}
