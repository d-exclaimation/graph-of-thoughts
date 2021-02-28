//
//  thought.tsx
//  graph-of-thoughts
//
//  Created by d-exclaimation on 10:52 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Center, VStack, Textarea, Box} from '@chakra-ui/react';

import {Thoughts} from '../models/thoughts';
import {GetServerSideProps} from 'next';
import {getThought} from '../lib/GetThoughts';
import Head from 'next/head';
import RouteSideCar from '../components/router/RoutesSideBar';
import Hero from '../components/templates/Hero';
import {nextBlue} from '../constants/color.scheme';
import {useWindowSize} from '../lib/WindowConfig';

interface Props {
    curr: Thoughts
}

const Thought: React.FC<Props> = ({ curr }: Props) => {
    const window = useWindowSize();

    return (
        <>
            <Head>
                <meta property="og:title" content={curr.title}/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://exclaimation.netlify.app/"/>
                <meta property="og:image" content="https://docs.google.com/uc?export=download&id=1YJ3qp7-_dsW_JvCbKXHJUVeuXTR_vaEW"/>
                <meta property="og:description"
                    content={ curr.body } />
                <title> { curr.title  } </title>
            </Head>
            <header className="App-header">
                <Center>
                    <VStack>
                        <RouteSideCar/>
                        <Hero title={curr.title}/>
                        <Box p={10} shadow="dark-lg">
                            <Textarea
                                w={Math.round(window.width * 0.7)}
                                color={nextBlue}
                                onChange={e => console.log(e.target.value)}
                                variant="flushed"
                                placeholder={curr.body}
                            />
                        </Box>
                    </VStack>
                </Center>
            </header>
        </>
    );
};


export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = context.query.pid as string | undefined;
    if (!query) {
        console.log('Fucking query');
        return {
            notFound: true,
        };
    }
    const curr = await getThought(parseInt(query));
    if (!curr)
        return {
            notFound: true,
        };
    return {
        props: {
            curr: curr
        }
    };
};

export default Thought;
