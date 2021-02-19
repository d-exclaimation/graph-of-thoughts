//
//  GetThoughts.ts
//  app
//
//  Created by d-exclaimation on 12:44 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {Thoughts} from '../models/thoughts';
import {ThoughtDTO, User} from '../models/users';

export const getThoughts = async (): Promise<Thoughts[]> => {
    const res = await fetch(process.env.API || 'http://localhost:5000/thoughts');
    return await res.json();
};

export const postThoughts = async (user: User, title: string, body: string, imageURL?: string): Promise<Thoughts> => {
    const data: ThoughtDTO = {
        thought: {
            title: title,
            body: body,
            imageURL: imageURL
        },
        user: user
    };
    const res = await fetch(process.env.API || 'http://localhost:5000/thoughts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return await res.json();
};
