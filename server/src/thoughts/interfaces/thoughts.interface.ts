//
//  thoughts.interface.ts
//  server
//
//  Created by d-exclaimation on 10:48 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { User } from '../../users/interfaces/user.entity';

export interface IThoughts {
    title: string,
    body: string,
    imageURL?: string,
}

export interface IThoughtUser {
    thought: IThoughts,
    user: User
}
