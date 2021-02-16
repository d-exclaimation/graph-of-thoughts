//
//  thoughts.service.ts
//  server
//
//  Created by d-exclaimation on 10:44 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Injectable } from '@nestjs/common';
import { IThoughts } from './interfaces/thoughts.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Thought } from './interfaces/thought.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from '../users/interfaces/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class ThoughtsService {
    constructor(
        @InjectRepository(Thought)
        private _thoughtContext: Repository<Thought>,
        private _userService: UsersService
    ) {}

    async find(): Promise<Thought[]> {
        return await this._thoughtContext.find();
    }

    async findOne(id: number): Promise<Thought | undefined> {
        return await this._thoughtContext.findOne(id);
    }

    async findForUser(userid: number): Promise<Thought[]> {
        const user = await this._userService.findOne(userid);
        return (await this._thoughtContext.find({ where: { user: user }}));
    }

    async create(user: User, body: IThoughts): Promise<Thought | null> {
        const validUser = await this._userService.findOne(user.id);
        if (!validUser)
            return null;
        const thought = new Thought(body, validUser);
        return await this._thoughtContext.save(thought);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this._thoughtContext.delete(id);
    }

    async change(id: number, body: Thought): Promise<UpdateResult> {
        return await this._thoughtContext.update(id, body);
    }

}
