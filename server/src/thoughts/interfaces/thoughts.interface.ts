//
//  thoughts.interface.ts
//  server
//
//  Created by d-exclaimation on 10:48 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

export interface IThoughts {
    title: string,
    body: string,
    imageURL?: string,
    author: IAuthor,
}

export interface IAuthor {
    name: string
}
