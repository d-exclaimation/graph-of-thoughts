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
    try {
        const res = await fetch(process.env.API || 'http://localhost:5000/thoughts', {
            method: 'GET',
            headers: {
                'Authorization': process.env.AUTH_TOKEN || '',
            }
        });
        return await res.json();
    } catch (err) {
        console.log(err);
        return [];
    }
};

export const checkUser = async (user: User, thought: Thoughts): Promise<boolean> => {
    try {
        const res = await fetch((process.env.API || 'http://localhost:5000/thoughts') + '/filter' + `?userid=${user.id}`, {
            method: 'GET',
            headers: {
                'Authorization': process.env.AUTH_TOKEN || '',
            }
        });
        const thoughts: Thoughts[] = await res.json();
        return !!(thoughts.filter(option => option.id === thought.id && thought.title === option.title).length);
    } catch (err) {
        console.log(err);
        return false;
    }
};

export const getThought = async (id: number): Promise<Thoughts | null> => {
    try {
        const res = await fetch((process.env.API || 'http://localhost:5000/thoughts') + `/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': process.env.AUTH_TOKEN || '',
            }
        });
        return await res.json();
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const postThoughts = async (user: User, title: string, body: string, imageURL: string | null): Promise<Thoughts | null> => {
    const data: ThoughtDTO = {
        thought: {
            title: title,
            body: body,
            imageURL: imageURL
        },
        user: user
    };
    try {
        const res = await fetch(process.env.API || 'http://localhost:5000/thoughts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': process.env.NEXT_PUBLIC_AUTH || '',
            },
            body: JSON.stringify(data),
        });
        return await res.json();
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const deleteThought = async (user: User, post: Thoughts): Promise<void> => {
    try {
        const res = await fetch((process.env.API || 'http://localhost:5000/thoughts/') + `${post.id}?userid=${user.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': process.env.NEXT_PUBLIC_AUTH || ''
            }
        });
        console.log(res.ok);
    } catch (err) {
        console.log(err);
    }
};
