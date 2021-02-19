//
//  index.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { VStack, Center } from '@chakra-ui/react';
import Hero from '../components/Hero';
import RouteSideCar from '../components/RoutesSideBar';
import ThoughtsMaker from '../components/ThoughtsMaker';
import Head from 'next/head';
import Timeline from '../components/Timeline';

import {GetServerSideProps} from 'next';
import {Thoughts} from '../models/thoughts';
import {getThoughts} from '../lib/GetThoughts';
import {User} from '../models/users';
import { useRouter } from 'next/router';

interface Props {
    user?: User
    timeline: Thoughts[]
}

const Index: React.FC<Props> = ({ timeline, user }: Props) => {
    const router = useRouter();

    const rehydrate = () => {
        router.replace(router.asPath);
    };

    return (
        <>
            <Head>
                <meta property="og:title" content="Home Page"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://exclaimation.netlify.app/"/>
                <meta property="og:image" content="https://docs.google.com/uc?export=download&id=1YJ3qp7-_dsW_JvCbKXHJUVeuXTR_vaEW"/>
                <meta property="og:description"
                    content="home page" />
                <title> { 'Graph of Thoughts' } </title>
            </Head>
            <header className="App-header">
                <Center>
                    <VStack>
                        <RouteSideCar/>
                        { user && <ThoughtsMaker user={user} rehydrate={rehydrate} /> }
                        <Hero title={ user?.username || 'Graph of Thoughts'}/>
                        <Timeline timeline={timeline} />
                    </VStack>
                </Center>
            </header>
        </>
    );
};


export const getServerSideProps: GetServerSideProps = async () => {
    const timeline = await getThoughts();
    return {
        props: {
            user: {
                id: 2,
                username: 'd-exclaimation',
                email: 'vincentlimchen@gmail.com'
            },
            timeline
        }
    };
};

export default Index;
