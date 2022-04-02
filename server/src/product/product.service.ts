import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto';
import { Product, Comment } from '@prisma/client';

@Injectable()
export class ProductService {
	constructor(private prisma: PrismaService) {}

	async addProduct(dto: CreateProductDto): Promise<Product> {
		return await this.prisma.product.create({
			data: dto as any,
		});
	}

	async getAllProducts() {
		return this.prisma.product.findMany({
			orderBy: {
				id: 'desc',
			},
			include: {
				comments: {
					select: {
						id: true,
						rait: true,
					},
				},
				_count: {
					select: {
						comments: true,
					},
				},
			},
		});
	}

	async getById(id: number) {
		return this.prisma.product.findFirst({
			where: {
				id,
			},
			include: {
				comments: true,
				owner: true,
				_count: {
					select: {
						comments: true,
					},
				},
			},
		});
	}

	async deleteProduct(id: number): Promise<Product> {
		return await this.prisma.product.delete({
			where: {
				id: id,
			},
		});
	}

	async getAllComments(id: number): Promise<Comment[]> {
		return await this.prisma.comment.findMany({
			where: {
				productId: id,
			},
			include: {
				owner: true,
			},
		});
	}

	async searchForProducts(query: string): Promise<Product[]> {
		return await this.prisma.product.findMany({
			where: {
				options: {
					has: query,
				},
				OR: {
					title: query,
				},
			},
		});
	}

	async updateProduct(
		productId: number,
		dto: CreateProductDto,
	): Promise<Product> {
		return await this.prisma.product.update({
			where: { id: productId },
			data: dto,
		});
	}
}
