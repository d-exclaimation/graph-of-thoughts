//
//  main.ts
//  nest-rest-kit
//
//  Created by d-exclaimation on 1:54 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const PORT = parseInt(process.env.PORT ?? '5000');

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(PORT);
}

bootstrap();
