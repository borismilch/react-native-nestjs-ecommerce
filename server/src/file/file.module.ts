import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { FirebaseModule } from '../firebase/firebase.module';
import { FirebaseService } from 'src/firebase/firebase.service';

@Module({
	providers: [FileService, FirebaseService],
	controllers: [FileController],
	imports: [FirebaseModule],
})
export class FileModule {}
