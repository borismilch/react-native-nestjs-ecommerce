import { Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Body } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('login')
	loginUser(@Body() dto: LoginDto) {
		return this.authService.login(dto);
	}

	@Post('register')
	registerUser(@Body() dto: RegisterDto) {
		return this.authService.register(dto);
	}

	@Post('provider')
	signInWithProvider(@Body() dto: RegisterDto) {
		return this.authService.signInWithProvider(dto);
	}
}
