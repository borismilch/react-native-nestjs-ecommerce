import { Injectable } from '@nestjs/common';
import { uuid } from 'src/helpers';
import * as fs from 'fs';
import * as path from 'path';
import { FirebaseService } from 'src/firebase/firebase.service';

@Injectable()
export class FileService {
	constructor(private firebaseService: FirebaseService) {}

	async uploadFile(file: Express.Multer.File, type: string): Promise<string> {
		const fileExtention: string = file.originalname.split('.').pop();
		const fileName: string = uuid() + '.' + fileExtention;
		const filePath: string = path.join(__dirname, '..', 'static', type);

		if (!fs.existsSync(filePath)) {
			fs.mkdirSync(filePath, { recursive: true });
		}

		const url = await this.firebaseService.uploadFile(file, fileName);

		fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);

		return url[0];
	}
}
