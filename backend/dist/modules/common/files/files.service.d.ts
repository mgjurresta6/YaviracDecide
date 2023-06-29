import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
export declare class FilesService {
    create(createFileDto: CreateFileDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFileDto: UpdateFileDto): string;
    remove(id: string): string;
}
