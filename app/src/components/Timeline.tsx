//
//  Timeline.tsx
//  app
//
//  Created by d-exclaimation on 12:34 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Box, SimpleGrid} from '@chakra-ui/react';

import {Thoughts} from '../models/thoughts';
import Post from './templates/Post';

interface Props {
    timeline: Thoughts[]
}

const Timeline: React.FC<Props> = ({ timeline }: Props) => {
    return (
        <SimpleGrid columns={3} spacing={5}>
            { timeline.map((thought, i) => {
                return (
                    <Box
                        shadow="dark-lg"
                        key={i}
                    >
                        <Post title={thought.title} body={thought.body} imageURL={thought.imageURL} />
                    </Box>
                );
            }) }
        </SimpleGrid>
    );
};

export default Timeline;
