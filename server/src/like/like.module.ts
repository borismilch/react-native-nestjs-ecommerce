import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
	providers: [LikeService],
	controllers: [LikeController],
	imports: [PrismaModule],
})
export class LikeModule {}
