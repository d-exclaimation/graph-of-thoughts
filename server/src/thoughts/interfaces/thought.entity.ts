//
//  thought.entity.ts
//  server
//
//  Created by d-exclaimation on 2:33 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { __notitle__ } from 'src/constants/entity.defaults';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/interfaces/user.entity';
import { IThoughts } from './thoughts.interface';

@Entity()
export class Thought {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ default: __notitle__ })
    title!: string;

    @Column()
    body!: string;

    @Column({ nullable: true })
    imageURL?: string;

    @ManyToOne(() => User, user => user.thoughts)
    user!: User;

    constructor(body: IThoughts, user: User) {
        Object.assign(this, body);
        this.user = user;
    }
}
