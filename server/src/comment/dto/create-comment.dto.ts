import { IsString, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export default class CreateCommentDto {
	@IsString()
	@IsNotEmpty()
	readonly body: string;

	@IsNumber()
	@IsNotEmpty()
	readonly userId: number;

	@IsNumber()
	@IsNotEmpty()
	readonly productId: number;

	@IsNumber()
	@IsNotEmpty()
	@IsPositive()
	readonly rait: number;
}
