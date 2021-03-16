//
//  user.entity.ts
//  server
//
//  Created by d-exclaimation on 2:27 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { __noname__ } from 'src/constants/entity.defaults';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Thought } from '../../thoughts/interfaces/thought.entity';
import { UserSignUp } from './users.interface';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ default: __noname__ })
    username!: string;

    @Column()
    email!: string;

    @OneToMany(() => Thought, thought => thought.user)
    thoughts!: Thought[];

    constructor(body: UserSignUp) {
        Object.assign(this, body);
    }
}

