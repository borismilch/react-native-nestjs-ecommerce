import { CreateOrderDto } from './dto';
import { OrderService } from './order.service';
import {
	Controller,
	Get,
	Param,
	Post,
	Put,
	Delete,
	Body,
} from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards';

@Controller('order')
export class OrderController {
	constructor(private orderService: OrderService) {}

	@Get('all')
	getAllOrders() {
		return this.orderService.getAllOrders();
	}

	@Get('user/:userId')
	getUserOrders(@Param('userId') id: string) {
		return this.orderService.getUserOrders(+id);
	}

	@UseGuards(JwtGuard)
	@Get(':id')
	getOrderById(@Param('id') id: string) {
		return this.orderService.getById(+id);
	}

	@UseGuards(JwtGuard)
	@Post('add')
	createOrder(@Body() dto: CreateOrderDto) {
		return this.orderService.addOrder(dto);
	}

	@UseGuards(JwtGuard)
	@Delete(':id')
	deleteOrder(@Param('id') id: string) {
		return this.orderService.deleteOrder(+id);
	}
}
