//
//  GetThoughts.ts
//  app
//
//  Created by d-exclaimation on 12:44 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {Thoughts} from '../models/thoughts';

export const getThoughts = async (): Promise<Thoughts[]> => {
    const res = await fetch(process.env.API || 'http://localhost:5000/thoughts');
    console.log(res);
    const body: Thoughts[] = await res.json();
    console.log(body);
    return body;
};
