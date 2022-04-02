import { IsNumber, IsPositive } from 'class-validator';

export default class LikeDto {
	@IsNumber()
	@IsPositive()
	readonly productId: number;

	@IsNumber()
	@IsPositive()
	readonly userId: number;
}
