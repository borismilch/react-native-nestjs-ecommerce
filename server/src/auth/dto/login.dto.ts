import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export default class LoginDto {
	@IsString()
	@IsNotEmpty()
	readonly password: string;

	@IsString()
	@IsNotEmpty()
	@IsEmail()
	readonly email: string;
}
