//
//  thoughts.ts
//  app
//
//  Created by d-exclaimation on 12:38 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import {User} from './users';

export interface Thoughts {
    id: number,
    title: string,
    body: string,
    imageURL?: string,
    user?: User
}

/*
[
  {
    "id": 1,
    "title": "Hello World",
    "body": "Hello this should pass as my thoughts and updated",
    "imageURL": null
  }
]
*/
