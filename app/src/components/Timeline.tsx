//
//  Timeline.tsx
//  app
//
//  Created by d-exclaimation on 12:34 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Box, VStack} from '@chakra-ui/react';

import {Thoughts} from '../models/thoughts';

interface Props {
    timeline: Thoughts[]
}

const Timeline: React.FC<Props> = ({ timeline }: Props) => {
    return (
        <VStack spacing={5}>
            { timeline.map((thought, i) => {
                return (
                    <Box
                        p={5}
                        shadow="dark-lg"
                        color="#fafafa" key={i}
                    >
                        {thought.title}
                    </Box>
                );
            }) }
        </VStack>
    );
};

export default Timeline;
