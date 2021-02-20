//
//  Post.tsx
//  app
//
//  Created by d-exclaimation on 7:05 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { Box, Img, Link } from '@chakra-ui/react';

import {drivePlayURL} from '../../lib/GoogleDriveURL';

interface Props {
    title: string,
    body: string,
    imageURL?: string,
    url?: string,
}

const bar = drivePlayURL('https://drive.google.com/file/d/11xSLF9Lf_UUwAklQBEjoemAlUiBv0l2K/view?usp=sharing');

const Post: React.FC<Props> = ({ title, body, imageURL, url }: Props) => {

    return (
        <Box bg="#282c34" maxW="sm" boxShadow="dark-lg" borderRadius="lg" overflow="hidden">
            <Img src={imageURL || bar } />

            { url ?
                <Link href={url}>
                    <Box p="3">
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
                </Link> :
                <Box p="3">
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
            }
        </Box>
    );
};

export default Post;
