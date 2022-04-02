import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto';
import { Comment } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentService {
	constructor(private prisma: PrismaService) {}

	async addComment(dto: CreateCommentDto): Promise<Comment> {
		return await this.prisma.comment.create({
			data: dto as any,
		});
	}

	async getAllComments() {
		return this.prisma.comment.findMany({
			orderBy: [
				{
					timeStamp: 'desc',
				},
			],
		});
	}

	async getById(id: number) {
		return this.prisma.comment.findFirst({
			where: {
				id,
			},
		});
	}

	async deleteComment(id: number): Promise<Comment> {
		return await this.prisma.comment.delete({
			where: {
				id: id,
			},
		});
	}

	async updateComment(
		commentId: number,
		dto: CreateCommentDto,
	): Promise<Comment> {
		return await this.prisma.comment.update({
			where: { id: commentId },
			data: dto,
		});
	}
}
