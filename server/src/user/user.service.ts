import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from 'src/auth/dto';

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getAllUsers(): Promise<User[]> {
		return await this.prisma.user.findMany();
	}

	async deleteUser(userId: number): Promise<User> {
		return await this.prisma.user.delete({
			where: { id: userId },
		});
	}

	async getUserStats(userId: number): Promise<User> {
		console.log(userId);
		const userWithStats = await this.prisma.user.findFirst({
			where: {
				id: userId,
			},
			include: {
				_count: {
					select: {
						comments: true,
						orders: true,
						products: true,
					},
				},
			},
		});
		return userWithStats;
	}

	async updateUser(dto: UpdateUserDto, id: number) {
		console.log(dto, id);
		return await this.prisma.user.update({
			where: {
				id: id,
			},
			data: {
				picture: dto.picture,
				name: dto.name,
				bio: dto.bio,
			},
		});
	}
}
