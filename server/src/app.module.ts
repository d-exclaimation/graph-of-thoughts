//
//  app.module.ts
//  nest-rest-kit
//
//  Created by d-exclaimation on 1:53 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThoughtsModule } from './thoughts/thoughts.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        ThoughtsModule
    ],
})
export class AppModule{
}
