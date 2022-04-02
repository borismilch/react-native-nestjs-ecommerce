import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { LikeService } from './like.service';
import { Body } from '@nestjs/common';
import { LikeDto } from './dto';

@Controller('like')
export class LikeController {
	constructor(private likeService: LikeService) {}

	@Post('like')
	likeProduct(@Body() like: LikeDto) {
		return this.likeService.addLike(like);
	}

	@Post('get')
	getProductByAttrs(@Body() like: LikeDto) {
		return this.likeService.getLikeByAttrs(like);
	}

	@Delete(':likeId')
	dislikeProduct(@Param('likeId') likeId: string) {
		return this.likeService.deleteLike(+likeId);
	}

	@Get('product/:id')
	getProductLikes(@Param('id') productId: string) {
		return this.likeService.getProductsLikes(+productId);
	}

	@Get('user/:id')
	getUsersLikes(@Param('id') userId: string) {
		return this.likeService.getUsersLikes(+userId);
	}
}
