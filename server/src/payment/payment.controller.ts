import { Controller, Get, Param } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('checkout')
export class PaymentController {
	constructor(private paymentService: PaymentService) {}

	@Get(':amount')
	payOrDie(@Param('amount') amount: string) {
		console.log('ssaksao');
		return this.paymentService.payMoney(+amount);
	}
}
