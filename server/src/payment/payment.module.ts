import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { StripeModule } from 'nestjs-stripe';

@Module({
	providers: [PaymentService],
	controllers: [PaymentController],
	imports: [StripeModule],
})
export class PaymentModule {}
