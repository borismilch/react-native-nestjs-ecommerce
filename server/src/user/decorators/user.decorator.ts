import {
	createParamDecorator,
	ExecutionContext,
} from '@nestjs/common';
import { User } from '@prisma/client';

const GetUser = createParamDecorator(
	(data: keyof User, ctx: ExecutionContext): keyof User => {
		const request: any = ctx.switchToHttp().getRequest();

		if (data) {
			return request.user[data];
		}

		return request.user;
	},
);

export default GetUser;
