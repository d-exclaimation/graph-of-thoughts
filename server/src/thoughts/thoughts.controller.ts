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
    ForbiddenException,
} from '@nestjs/common';
import { ThoughtsService } from './thoughts.service';
import { IThoughts } from './interfaces/thoughts.interface';

@Controller('/thoughts')
export class ThoughtsController {

    constructor(private thoughtService: ThoughtsService) {}

    @Get()
    async getAll(): Promise<IThoughts[]> {
        return this.thoughtService.allData();
    }

    @Get(':id')
    async get(@Param('id', ParseIntPipe) id: number): Promise<IThoughts> {
        const res = await this.thoughtService.data(id);
        if (!res)
            throw new NotFoundException();
        return res;
    }

    @Post()
    async post(@Body() body: IThoughts): Promise<IThoughts> {
        return this.thoughtService.add(body);
    }

    @Put(':id')
    async put(@Param('id', ParseIntPipe) id: number, @Body() body: IThoughts): Promise<IThoughts> {
        if (id < 0 || id > (await this.thoughtService.allData()).length)
            throw new NotFoundException();
        return this.thoughtService.change(id, body);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<IThoughts> {
        const res = await this.thoughtService.delete(id);
        if (!res)
            throw new ForbiddenException();
        return res;
    }

    @Get('random/:word')
    async entry(@Param('word') word: string): Promise<IThoughts> {
        return {
            title: 'Random',
            body: `You said something about ${word}`,
            author: {
                name: 'Anonymous'
            }
        };
    }
}
