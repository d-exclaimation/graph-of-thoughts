//
//  app.module.ts
//  nest-rest-kit
//
//  Created by d-exclaimation on 1:53 PM.
//  Copyright © 2020 d-exclaimation. All rights reserved.
//

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThoughtsModule } from './thoughts/thoughts.module';
import { __prod__ } from './constants/node.defaults';
import { User } from './users/interfaces/user.entity';
import { Thought } from './thoughts/interfaces/thought.entity';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            url: process.env.DATABASE_URL || 'postgres://postgres:password@localhost/graph_thoughts?sslmode=disable',
            username: 'postgres',
            password: '',
            entities: [
                User,
                Thought
            ],
            synchronize: !__prod__,
        }),
        ThoughtsModule,
        UsersModule,
    ],
})
export class AppModule{
}
