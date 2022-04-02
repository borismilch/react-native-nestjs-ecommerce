import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
	UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto';

@Controller('comment')
export class CommentController {
	constructor(private commentService: CommentService) {}

	@Get('all')
	getAllProducts() {
		return this.commentService.getAllComments();
	}

	@Get(':id')
	getProductById(@Param('id') id: string) {
		return this.commentService.getById(+id);
	}

	@UseGuards(JwtGuard)
	@Post('create')
	createProduct(@Body() dto: CreateCommentDto) {
		return this.commentService.addComment(dto);
	}

	@UseGuards(JwtGuard)
	@Delete(':id')
	deleteProduct(@Param('id') id: string) {
		return this.commentService.deleteComment(+id);
	}

	@UseGuards(JwtGuard)
	@Put(':id')
	updateProduct(@Param('id') id: string, @Body() dto: CreateCommentDto) {
		return this.commentService.updateComment(+id, dto);
	}
}
