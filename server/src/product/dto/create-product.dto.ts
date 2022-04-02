import { IsNumber, IsNotEmpty, IsString } from 'class-validator';

export default class CreateProductDto {
	@IsString()
	@IsNotEmpty()
	readonly title: string;
	@IsString()
	@IsNotEmpty()
	readonly description?: string;
	@IsString()
	@IsNotEmpty()
	readonly image: string;

	readonly images?: string[];
	readonly options: string[];

	@IsNumber()
	readonly avgRating?: number;
	@IsNumber()
	readonly price: number;
	@IsNumber()
	readonly oldPrice?: number;
	@IsNumber()
	readonly userId: number;
}
