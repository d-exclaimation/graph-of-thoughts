//
//  UserHandler.ts
//  app
//
//  Created by d-exclaimation on 12:44 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { User } from '../models/users';

export const login = async (email: string): Promise<User | null> => {
    try {
        const res = await fetch((process.env.USER_API || 'http://localhost:5000/users') + `/login?email=${email}`, {
            method: 'DELETE',
            headers: {
                'Authorization': process.env.NEXT_PUBLIC_AUTH || ''
            }
        });
        return await res.json();
    } catch (err) {
        return null;
    }
};