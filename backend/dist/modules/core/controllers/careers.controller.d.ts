import { CreateCareerDto, UpdateCareerDto, FilterCareerDto } from '@core/dto';
import { CareersService } from '@core/services';
import { CareerEntity } from '@core/entities';
import { ResponseHttpModel } from '@shared/models';
export declare class CareersController {
    private careersService;
    constructor(careersService: CareersService);
    catalogue(): Promise<ResponseHttpModel>;
    create(payload: CreateCareerDto): Promise<ResponseHttpModel>;
    findAll(params: FilterCareerDto): Promise<ResponseHttpModel>;
    findOne(id: string): Promise<ResponseHttpModel>;
    update(id: string, payload: UpdateCareerDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    removeAll(payload: CareerEntity[]): Promise<ResponseHttpModel>;
}
