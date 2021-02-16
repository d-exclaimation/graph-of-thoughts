//
//  users.controller.ts.ts
//  server
//
//  Created by d-exclaimation on 2:18 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {
    Controller,
    Get,
    Post,
    Body,
    Param, ParseIntPipe, NotFoundException, Delete, Put, BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.entity';
import { IUser } from './interfaces/users.interface';
import { UpdateResult } from 'typeorm';

@Controller('/users')
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

    @Get(':id')
    async get(@Param('id', ParseIntPipe) id: number): Promise<User> {
        const res = await this.userService.findOne(id);
        if (!res)
            throw new NotFoundException();
        return res;
    }

    @Post()
    async createNew(@Body() user: IUser): Promise<User> {
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
