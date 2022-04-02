import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

interface JWTPayload {
	userId: number;
	email: string;
}

@Injectable()
export default class JwtStrategy extends PassportStrategy(
	Strategy,
) {
	constructor(
		private prisma: PrismaService,
		config: ConfigService,
	) {
		super({
			jwtFromRequest:
				ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: config.get('JWT_SECRET'),
		});
	}

	async validate(payload: JWTPayload): Promise<User> {
		console.log(payload);
		const bdUser = await this.prisma.user.findFirst({
			where: {
				email: payload.email,
			},
		});
		return bdUser;
	}
}
