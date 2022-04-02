import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { contentParser } from 'fastify-multer';
import {
	NestFastifyApplication,
	FastifyAdapter,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';

// Import firebase-admin
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter(),
	);
	const configService: ConfigService = app.get(ConfigService);

	app.useGlobalPipes(new ValidationPipe({}));
	app.register(contentParser);

	const config = new DocumentBuilder()
		.setTitle('Cats example')
		.setDescription('The cats API description')
		.setVersion('1.0')
		.addTag('my dick')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);

	const adminConfig: ServiceAccount = {
		projectId: configService.get<string>('FIREBASE_PROJECT_ID'),
		privateKey: configService
			.get<string>('FIREBASE_PRIVATE_KEY')
			.replace(/\\n/g, '\n'),
		clientEmail: configService.get<string>('FIREBASE_CLIENT_EMAIL'),
	};
	// Initialize the firebase admin app
	admin.initializeApp({
		credential: admin.credential.cert(adminConfig),
		databaseURL: 'https://mylastproject-91894.firebaseio.com',
		storageBucket: 'gs://mylastproject-91894.appspot.com',
	});

	app.enableCors();

	const PORT = process.env.PORT || 5001;
	const HOST = '192.168.0.122';

	await app.listen(PORT, HOST, () =>
		console.log('Server started on port ' + PORT),
	);
}

export { admin };

bootstrap();
