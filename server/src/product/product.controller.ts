import {
	Controller,
	Get,
	Param,
	Post,
	Put,
	Delete,
	Body,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guards';
import { CreateProductDto } from './dto';

@Controller('product')
export class ProductController {
	constructor(private productService: ProductService) {}

	@Get('all')
	getAllProducts() {
		return this.productService.getAllProducts();
	}

	@Get(':id')
	getProductById(@Param('id') id: string) {
		return this.productService.getById(+id);
	}

	@Get(':id/comments')
	getProductComments(@Param('id') id: string) {
		return this.productService.getAllComments(+id);
	}

	@Get('search/:query')
	searchForProduct(@Param('query') query: string) {
		return this.productService.searchForProducts(query);
	}

	@UseGuards(JwtGuard)
	@Post('add')
	createProduct(@Body() dto: CreateProductDto) {
		return this.productService.addProduct(dto);
	}

	@UseGuards(JwtGuard)
	@Delete(':id')
	deleteProduct(@Param('id') id: string) {
		return this.productService.deleteProduct(+id);
	}

	@UseGuards(JwtGuard)
	@Put(':id')
	updateProduct(@Param('id') id: string, @Body() dto: CreateProductDto) {
		return this.productService.updateProduct(+id, dto);
	}
}
