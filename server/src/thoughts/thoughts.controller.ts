//
//  thoughts.controller.ts
//  server
//
//  Created by d-exclaimation on 10:22 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Controller, Get, Param } from '@nestjs/common';

@Controller('/thoughts')
export class ThoughtsController {

    @Get(":word")
    async entry(@Param('word') word: string): Promise<string> {
        return `You said ${word}`;
    }
}
