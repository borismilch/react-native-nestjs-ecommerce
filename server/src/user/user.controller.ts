import { Body, Controller, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { GetUser } from './decorators';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guards';
import { Get, Put, Delete } from '@nestjs/common';
import { User } from '@prisma/client';
import { UpdateUserDto } from 'src/auth/dto';

@Controller('users')
export class UserController {
	constructor(private userService: UserService) {}

	@UseGuards(JwtGuard)
	@Get('me')
	getCurrrentUser(@GetUser() currentUser: User) {
		return currentUser;
	}

	@UseGuards(JwtGuard)
	@Get('stats/:userId')
	getUserStats(@Param('userId') userId: number) {
		console.log(userId);
		return this.userService.getUserStats(+userId);
	}

	@Get('all')
	getAllUsers() {
		return this.userService.getAllUsers();
	}

	@UseGuards(JwtGuard)
	@Delete(':id')
	deleteUser(@Param('id') id: string) {
		return this.userService.deleteUser(+id);
	}

	@UseGuards(JwtGuard)
	@Put(':id')
	updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
		return this.userService.updateUser(dto, +id);
	}
}
