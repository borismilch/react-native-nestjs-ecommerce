import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LikeDto } from './dto';

@Injectable()
export class LikeService {
	constructor(private prisma: PrismaService) {}

	async getLikeByAttrs(dto: LikeDto) {
		try {
			const like = await this.prisma.like.findFirst({
				where: {
					productId: dto.productId,
					AND: {
						userId: dto.userId,
					},
				},
			});

			return like;
		} catch (e) {
			return null;
		}
	}

	async addLike(dto: LikeDto) {
		return await this.prisma.like.create({
			data: dto,
		});
	}

	async deleteLike(likeId: number) {
		return await this.prisma.like.delete({
			where: {
				id: likeId,
			},
		});
	}

	async getUsersLikes(userId: number) {
		return await this.prisma.like.findMany({
			where: {
				userId,
			},
			include: {
				product: true,
			},
		});
	}

	async getProductsLikes(productId: number) {
		return await this.prisma.like.findMany({
			where: {
				productId,
			},
		});
	}
}
