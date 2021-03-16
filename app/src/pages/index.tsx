//
//  index.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { VStack, Center, Text } from '@chakra-ui/react';
import Hero from '../components/templates/Hero';
import RouteSideCar from '../components/router/RoutesSideBar';
import ThoughtsMaker from '../components/ThoughtsMaker';
import Head from 'next/head';
import Timeline from '../components/Timeline';

import { login } from '../lib/UserHandler';
import {GetServerSideProps} from 'next';
import {Thoughts} from '../models/thoughts';
import {getThoughts} from '../lib/GetThoughts';
import {User} from '../models/users';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

interface Props {
    timeline: Thoughts[]
}

const Index: React.FC<Props> = ({ timeline }: Props) => {
    const router = useRouter();
    const [user, setUser] = React.useState<User | undefined>(undefined);
    const rehydrate = () => {
        (async () => {
            await router.replace(router.asPath);
        })();
    };

    if (typeof window !== 'undefined' && !user) {
        const email = Cookies.get('thoughts-email');
        if (email) {
            (async () => {
                const res = await login(email);
                console.log(res);
                setUser(res ?? undefined);
            })();
        }
        else {
            router.push('/login').catch(console.log);
        }
    }

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
                        <Hero title={'Graph of Thoughts'}/>
                        { timeline.length && <Timeline user={user} timeline={timeline} rehydrate={rehydrate} /> }
                        <Text
                            pt={2} pb={2} fontSize="sm" color="#aaaaaa"
                        >
                            default images by MrSquaare
                        </Text>
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
            timeline
        }
    };
};

export default Index;
