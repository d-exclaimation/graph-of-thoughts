//
//  thoughts.module.ts
//  server
//
//  Created by d-exclaimation on 10:28 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Module } from '@nestjs/common';
import { ThoughtsController } from './thoughts.controller';

@Module({
    imports: [],
    controllers: [ThoughtsController],
    providers: []
})
export class ThoughtsModule {}
