//
//  users.interface.ts
//  server
//
//  Created by d-exclaimation on 3:06 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserSignUp {
    @IsNotEmpty()
    username!: string;

    @IsEmail()
    email!: string;
}
