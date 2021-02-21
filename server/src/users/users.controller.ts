//
//  users.controller.ts.ts
//  server
//
//  Created by d-exclaimation on 2:18 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {
    Controller, UseGuards,
    Get, Post, Delete, Put,
    Body, Param, Query,
    ParseIntPipe,
    NotFoundException, BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.entity';
import { UserSignUp } from './interfaces/users.interface';
import { UpdateResult } from 'typeorm';
import { AuthorizationGuard } from '../middleware/authorization.guard';

@Controller('/users')
@UseGuards(AuthorizationGuard)
export class UsersController {

    constructor(private userService: UsersService) {}

    @Get('/random/:word')
    async randomWord(@Param('word') word: string): Promise<string> {
        return `You said ${word}`;
    }

    @Get()
    async getAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get('/login')
    async getAccount(@Query('email') email: string): Promise<User> {
        const all = await this.userService.findAll();
        const users = all.filter(user => user.email === email).shift();
        if (!users)
            throw new NotFoundException();
        return users;
    }

    @Get(':id')
    async get(@Param('id', ParseIntPipe) id: number): Promise<User> {
        const res = await this.userService.findOne(id);
        if (!res)
            throw new NotFoundException();
        return res;
    }

    @Post()
    async createNew(@Body() user: UserSignUp): Promise<User> {
        return this.userService.create(user)
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() user: User): Promise<UpdateResult> {
        if (id !== user.id)
            throw new BadRequestException();
        return this.userService.update(id, user);
    }

    @Delete(':id')
    async removeOne(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.userService.deleteOne(id);
    }
}
