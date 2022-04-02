import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export default class UpdateUserDto {
	@IsString()
	readonly bio: string;

	@IsString()
	@IsNotEmpty()
	readonly name: string;

	@IsString()
	@IsNotEmpty()
	@IsUrl()
	readonly picture: string;
}
