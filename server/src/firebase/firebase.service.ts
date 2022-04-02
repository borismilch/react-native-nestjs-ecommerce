import { Injectable } from '@nestjs/common';
import { admin } from 'src/main';

type actionType = 'read' | 'write' | 'delete' | 'resumable';

interface ICreateConfig {
	action: actionType;
	expires: string;
	content_type: string;
}

const createConfig = (type: string): ICreateConfig => ({
	action: 'read',
	expires: '03-17-2025',
	content_type: 'image/' + type,
});

@Injectable()
export class FirebaseService {
	constructor() {}

	async uploadFile(file: Express.Multer.File, fileName: string) {
		admin
			.storage()
			.bucket()
			.file(fileName)
			.createWriteStream()
			.end(file.buffer);

		const type = fileName.split('.').pop();

		return await admin
			.storage()
			.bucket()
			.file(fileName)
			.getSignedUrl(createConfig(type));
	}
}
