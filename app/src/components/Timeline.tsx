//
//  Timeline.tsx
//  app
//
//  Created by d-exclaimation on 12:34 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Box, SimpleGrid, Button} from '@chakra-ui/react';

import {Thoughts} from '../models/thoughts';
import Post from './templates/Post';
import {User} from '../models/users';
import {deleteThought} from '../lib/GetThoughts';
import Link from 'next/link';
import {useWindowSize} from '../lib/WindowConfig';

interface Props {
    user?: User,
    rehydrate: () => void,
    timeline: Thoughts[]
}

const Timeline: React.FC<Props> = ({ user, timeline, rehydrate }: Props) => {
    const window = useWindowSize();
    const onDelete = (user: User, thought: Thoughts) => {
        (async () => {
            await deleteThought(user, thought);
            rehydrate();
        })();
    };

    return (
        <SimpleGrid columns={Math.min(3, timeline.length)} spacing={6}>
            { timeline.map((thought, i) => {
                return (
                    <Box
                        key={i}
                    >
                        { user ?
                            <Post title={thought.title} body={thought.body} imageURL={thought.imageURL} onDelete={() => {
                                onDelete(user, thought);
                            }} /> :
                            <Post title={thought.title} body={thought.body} imageURL={thought.imageURL} />
                        }
                        <Link href={`/thought?pid=${thought.id}`}>
                            <Button> Peek </Button>
                        </Link>
                    </Box>
                );
            }) }
        </SimpleGrid>
    );
};

export default Timeline;
