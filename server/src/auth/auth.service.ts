import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

export interface IToken {
	acess_token: string;
}

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService,
		private config: ConfigService,
	) {}

	async login(dto: LoginDto): Promise<{ acess_token: string }> {
		const dbUser = await this.prisma.user.findFirst({
			where: {
				email: dto.email,
			},
		});

		if (!dbUser) {
			throw new BadRequestException('user not found');
		}

		const isSame = argon.verify(dbUser.password, dto.password);

		if (!isSame) {
			throw new BadRequestException('invalid password');
		}

		return this.signToken(dto.email, dbUser.id);
	}

	async register(dto: RegisterDto): Promise<{ acess_token: string }> {
		const dbUser = await this.prisma.user.findFirst({
			where: {
				email: dto.email,
			},
		});

		if (dbUser) {
			throw new BadRequestException('user already exists');
		}
		const hash = await argon.hash(dto.password);

		const newUser = await this.prisma.user.create({
			data: { ...dto, password: hash },
		});

		return this.signToken(dto.email, newUser.id);
	}

	async signInWithProvider(dto: RegisterDto) {
		console.log(dto);
		const dbUser = await this.prisma.user.findUnique({
			where: {
				email: dto.email,
			},
		});

		console.log(dbUser);

		if (!dbUser) {
			const newUser = await this.prisma.user.create({
				data: {
					email: dto.email,
					password: 'dskldkjdskjlskljdsksdskl',
					name: dto.name,
					picture: dto.picture,
				},
			});

			return this.signToken(newUser.email, newUser.id);
		} else {
			return this.signToken(dbUser.email, dbUser.id);
		}
	}

	async signToken(
		email: string,
		userId: number,
	): Promise<{ acess_token: string }> {
		const payload = {
			sub: userId,
			email,
		};

		const token = this.jwt.sign(payload, {
			expiresIn: '30d',
			secret: this.config.get('JWT_SECRET'),
		});

		return {
			acess_token: token,
		};
	}
}
