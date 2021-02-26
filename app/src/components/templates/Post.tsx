//
//  Post.tsx
//  app
//
//  Created by d-exclaimation on 7:05 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { Box, Img, Link, Button } from '@chakra-ui/react';

import {drivePlayURL} from '../../lib/GoogleDriveURL';
import {favRed} from '../../constants/color.scheme';

interface Props {
    title: string,
    body: string,
    onDelete?: () => void,
    imageURL?: string,
    url?: string,
}

const bar = drivePlayURL('https://drive.google.com/file/d/11xSLF9Lf_UUwAklQBEjoemAlUiBv0l2K/view?usp=sharing');

const Post: React.FC<Props> = ({ title, body, onDelete, imageURL, url }: Props) => {
    const postInner = (): JSX.Element => {
        return (
            <Box p="3" shadow="dark-lg">
                { onDelete &&
                <Button
                    onClick={onDelete}
                    color={favRed}
                    variant="ghost"
                    shadow="dark-lg"
                    size="sm"
                    mr={3}
                >
                    Delete
                </Button>
                }
                <Box
                    mt="1"
                    fontWeight="semibold"
                    lineHeight="tight"
                    isTruncated
                    color="#fafafa"
                >
                    {title}
                </Box>

                <Box fontSize="sm" color="#dadada">
                    {body}
                </Box>
            </Box>
        );
    };

    return (
        <Box bg="#282c34" maxW="sm" boxShadow="dark-lg" borderRadius="lg" overflow="hidden">
            <Img src={imageURL || bar } />

            { url ?
                <Link href={url}>
                    { postInner() }
                </Link> : postInner()
            }
        </Box>
    );
};

export default Post;
