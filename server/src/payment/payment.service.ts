import { Injectable } from '@nestjs/common';
import { InjectStripe } from 'nestjs-stripe';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
	constructor(@InjectStripe() private readonly stripe: Stripe) {}

	async payMoney(amount: number) {
		const customer = await this.stripe.customers.create();
		const ephemeralKey = await this.stripe.ephemeralKeys.create(
			{ customer: customer.id },
			{ apiVersion: '2020-08-27' },
		);

		const paymentIntent = await this.stripe.paymentIntents.create({
			amount: amount,
			currency: 'eur',
			customer: customer.id,
			automatic_payment_methods: {
				enabled: true,
			},
		});

		return {
			paymentIntent: paymentIntent.client_secret,
			ephemeralKey: ephemeralKey.secret,
			customer: customer.id,
		};
	}
}
