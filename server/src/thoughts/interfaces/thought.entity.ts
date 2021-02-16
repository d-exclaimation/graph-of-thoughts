//
//  thought.entity.ts
//  server
//
//  Created by d-exclaimation on 2:33 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/interfaces/user.entity';
import { IThoughts } from './thoughts.interface';

@Entity()
export class Thought {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    body!: string;

    @Column({ nullable: true })
    imageURL?: string;

    @ManyToOne(() => User, user => user.thoughts)
    user!: User;

    constructor(body: IThoughts) {
        Object.assign(this, body);
    }
}
