import {
	Controller,
	Post,
	Req,
	UploadedFile,
	UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import {
	FastifyFileInterceptor,
	FastifyMutliFilesInterceptor,
} from './interceptors';
import { FileTypes } from 'src/constants/fileTypes';

@Controller('file')
export class FileController {
	constructor(private fileService: FileService) {}

	@Post('upload')
	@UseInterceptors(FastifyFileInterceptor('picture', {}))
	uploadFile(@UploadedFile() file) {
		return this.fileService.uploadFile(file, FileTypes.IMAGE);
	}

	@Post('upload/all')
	@UseInterceptors(FastifyMutliFilesInterceptor(''))
	uploadFiles(@UploadedFile() file) {
		return this.fileService.uploadFile(file, FileTypes.IMAGE);
	}
}
