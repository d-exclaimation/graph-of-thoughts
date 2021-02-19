//
//  Timeline.tsx
//  app
//
//  Created by d-exclaimation on 12:34 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Box} from '@chakra-ui/react';

import {Thoughts} from '../models/thoughts';

interface Props {
    timeline: Thoughts[]
}

const Timeline: React.FC<Props> = ({ timeline }: Props) => {
    return (
        <Box>
            { timeline.map((thought, i) => {
                return (
                    <Box key={i}>
                        {thought.title}
                    </Box>
                );
            }) }
        </Box>
    );
};

export default Timeline;
