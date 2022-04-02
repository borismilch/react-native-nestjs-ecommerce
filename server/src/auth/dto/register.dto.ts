import { IsString, IsEmail, IsNotEmpty, IsUrl } from 'class-validator';

export default class RegisterDto {
	@IsString()
	@IsNotEmpty()
	readonly password: string;

	@IsString()
	@IsNotEmpty()
	@IsEmail()
	readonly email: string;

	@IsString()
	@IsNotEmpty()
	readonly name: string;

	@IsString()
	@IsNotEmpty()
	@IsUrl()
	readonly picture: string;
}
