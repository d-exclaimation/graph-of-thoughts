//
//  users.service.ts
//  server
//
//  Created by d-exclaimation on 2:53 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './interfaces/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { IUser } from './interfaces/users.interface';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private _userContext: Repository<User>
    ) {}

    async findAll(): Promise<User[]> {
        return await this._userContext.find();
    }

    async findOne(id: number): Promise<User | undefined> {
        return await this._userContext.findOne(id);
    }

    async deleteOne(id: number): Promise<void> {
        await this._userContext.delete(id);
    }

    async create(body: IUser): Promise<User> {
        return await this._userContext.save(body);
    }

    async update(id: number, changes: User): Promise<UpdateResult> {
        return await this._userContext.update(id, changes);
    }
}
