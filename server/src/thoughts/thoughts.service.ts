//
//  thoughts.service.ts
//  server
//
//  Created by d-exclaimation on 10:44 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import { Injectable } from '@nestjs/common';
import { IThoughts } from './interfaces/thoughts.interface';

@Injectable()
export class ThoughtsService {
    private readonly _sampleData: IThoughts[];

    constructor() {
        this._sampleData = [];
    }

    async add(body: IThoughts): Promise<IThoughts> {
        this._sampleData.push(body);
        return body;
    }

    async allData(): Promise<IThoughts[]> {
        return this._sampleData;
    }

    async data(id: number): Promise<IThoughts | null> {
        if (id < 0 || id >= this._sampleData.length)
            return null;
        return this._sampleData[id];
    }

    async change(id: number, body: IThoughts): Promise<IThoughts> {
        this._sampleData[id] = body;
        return body;
    }

    async delete(id: number): Promise<IThoughts | null> {
        if (id < 0 || id >= this._sampleData.length)
            return null;
        const deleted = this._sampleData[id];
        this._sampleData.splice(id, 1);
        return deleted;
    }
}
