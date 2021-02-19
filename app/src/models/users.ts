//
//  users.ts
//  app
//
//  Created by d-exclaimation on 1:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

export interface User {
    id: number,
    username: string,
    email: string
}


export interface ThoughtDTO {
    thought: {
        title: string,
        body: string,
        imageURL?: string,
    },
    user: User
}
