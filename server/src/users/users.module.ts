//
//  users.module.ts.ts
//  server
//
//  Created by d-exclaimation on 2:17 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './interfaces/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {}
