//
//  thought.tsx
//  graph-of-thoughts
//
//  Created by d-exclaimation on 10:52 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {Center, VStack, Text, Box, Img, Button, Flex, Spacer} from '@chakra-ui/react';

import {Thoughts} from '../models/thoughts';
import {GetServerSideProps} from 'next';
import {checkUser, deleteThought, getThought} from '../lib/GetThoughts';
import Head from 'next/head';
import RouteSideCar from '../components/router/RoutesSideBar';
import Hero from '../components/templates/Hero';
import {useWindowSize} from '../lib/WindowConfig';
import {User} from '../models/users';
import Router from 'next/router';
import {favRed} from '../constants/color.scheme';
import Cookies from 'js-cookie';
import {login} from '../lib/UserHandler';
import {drivePlayURL} from '../lib/GoogleDriveURL';

interface Props {
    curr: Thoughts,
}

const bar = drivePlayURL('https://drive.google.com/file/d/11xSLF9Lf_UUwAklQBEjoemAlUiBv0l2K/view?usp=sharing');

const Thought: React.FC<Props> = ({ curr }: Props) => {
    const [user, setUser] = React.useState<User | null>(null);
    const [isMine, setMine] = React.useState(false);
    const window = useWindowSize();

    if (typeof window !== 'undefined' && !user) {
        const email = Cookies.get('thoughts-email');
        if (email) {
            (async () => {
                const res = await login(email);
                if (res) {
                    const check =  await checkUser(res, curr);
                    setMine(check);
                }
                setUser(res);
            })();
        }
    }

    const deleteThis = (user: User, thought: Thoughts) => {
        (async () => {
            await deleteThought(user, thought);
            await Router.push('/');
        })();
    };
    const onDelete = () => {
        if(!user)
            return;
        deleteThis(user, curr);
    };
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
                        <Box borderRadius={20} shadow="dark-lg" maxW={Math.floor(window.width * 0.8)}>
                            <Img src={curr.imageURL || bar} />
                            <Box mx={10} mt={5}>
                                <Flex>
                                    <Hero title={curr.title} size={'6xl'} />
                                    <Spacer />
                                    <Center>
                                        { isMine &&
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
                                    </Center>
                                </Flex>
                            </Box>
                            <Text m={10} className="Text-Paragraph" >
                                { curr.body }
                            </Text>
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
            curr: curr,
        }
    };
};

export default Thought;
