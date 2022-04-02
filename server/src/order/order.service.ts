import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto';
import { PrismaService } from '../prisma/prisma.service';
import { Order } from '@prisma/client';

@Injectable()
export class OrderService {
	constructor(private prisma: PrismaService) {}

	async addOrder(dto: CreateOrderDto): Promise<any> {
		const newOrder = await this.prisma.order.create({
			data: {
				totalCost: dto.totalCost,
				userId: dto.userId,
			},
		});

		await this.prisma.shipping.createMany({
			data: dto.prductsIds.map((item) => ({
				count: item.count,
				orderId: newOrder.id,
				productId: item.id,
			})),
		});

		const products = await this.prisma.shipping.findMany({
			where: {
				orderId: newOrder.id,
			},
			include: {
				product: true,
			},
		});

		return { ...newOrder, shippings: products };
	}

	async getAllOrders() {
		return this.prisma.order.findMany();
	}

	async getUserOrders(userId: number) {
		return this.prisma.order.findMany({
			where: { userId },
			include: {
				shippings: {
					include: {
						product: true,
					},
				},
			},
		});
	}

	async getById(id: number) {
		return await this.prisma.order.findFirst({
			where: {
				id,
			},
			include: {
				shippings: true,
			},
		});
	}

	async deleteOrder(id: number): Promise<Order> {
		return await this.prisma.order.delete({
			where: {
				id: id,
			},
		});
	}
}
