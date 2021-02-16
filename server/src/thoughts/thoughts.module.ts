//
//  thoughts.module.ts
//  server
//
//  Created by d-exclaimation on 10:28 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Module } from '@nestjs/common';
import { ThoughtsController } from './thoughts.controller';
import { ThoughtsService } from './thoughts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Thought } from './interfaces/thought.entity';
import { UsersModule } from '../users/users.module';

@Module({
    imports: [TypeOrmModule.forFeature([Thought]), UsersModule],
    controllers: [ThoughtsController],
    providers: [ThoughtsService]
})
export class ThoughtsModule {}
