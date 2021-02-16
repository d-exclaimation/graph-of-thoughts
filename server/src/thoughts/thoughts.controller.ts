//
//  thoughts.controller.ts
//  server
//
//  Created by d-exclaimation on 10:22 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
    Delete,
    NotFoundException,
    ForbiddenException, UnauthorizedException, Query, BadRequestException,
} from '@nestjs/common';
import { ThoughtsService } from './thoughts.service';
import { IThoughts, IThoughtUser } from './interfaces/thoughts.interface';
import { Thought } from './interfaces/thought.entity';
import { UpdateResult } from 'typeorm';

@Controller('/thoughts')
export class ThoughtsController {

    constructor(private thoughtService: ThoughtsService) {}

    @Get()
    async getAll(): Promise<Thought[]> {
        return this.thoughtService.find();
    }

    @Get('/filter')
    async getFilter(@Query('userid', ParseIntPipe) userid: number | undefined): Promise<Thought[]> {
        if(!userid)
            throw new NotFoundException();
        return this.thoughtService.findForUser(userid);
    }

    @Get(':id')
    async get(@Param('id', ParseIntPipe) id: number): Promise<Thought> {
        const res = await this.thoughtService.findOne(id);
        if (!res)
            throw new NotFoundException();
        return res;
    }


    @Post()
    async post(@Body() data: IThoughtUser): Promise<Thought> {
        const {thought, user} = data;
        const res = await this.thoughtService.create(user, thought);
        if (!res)
            throw new UnauthorizedException();
        return res;
    }

    @Put(':id')
    async change(@Param('id', ParseIntPipe) id: number, @Body() body: Thought): Promise<UpdateResult> {
        if (id !== body.id)
            throw new BadRequestException();

        const isOwned = (await this.thoughtService.findForUser(body.user.id))
            .map(thought => thought.id === body.id).reduce((prev, curr) => prev || curr, false);

        if (!isOwned)
            throw new ForbiddenException();

        return this.thoughtService.change(id, body);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number, @Query('userid', ParseIntPipe) userid: number | undefined): Promise<void> {
        if (!userid)
            throw new UnauthorizedException();

        const isAllowed = (await this.thoughtService.findForUser(userid))
            .map(thought => thought.id === id)
            .reduce((prev, curr) => prev || curr, false);
        if (!isAllowed)
            throw new ForbiddenException();

        const res = await this.thoughtService.delete(id);
        if (!res)
            throw new ForbiddenException();
    }

    @Get('random/:word')
    async entry(@Param('word') word: string): Promise<IThoughts> {
        return {
            title: 'Random',
            body: `You said something about ${word}`,
        };
    }
}
