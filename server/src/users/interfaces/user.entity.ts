//
//  user.entity.ts
//  server
//
//  Created by d-exclaimation on 2:27 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Thought } from '../../thoughts/interfaces/thought.entity';
import { IUser } from './users.interface';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ default: 'Anonymous' })
    username!: string;

    @Column()
    email!: string;

    @OneToMany(() => Thought, thought => thought.user)
    thoughts!: Thought[];

    constructor(body: IUser) {
        Object.assign(this, body);
    }
}

