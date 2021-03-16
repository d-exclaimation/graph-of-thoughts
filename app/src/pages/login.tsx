//
//  login.tsx
//  graph-of-thoughts
//
//  Created by d-exclaimation on 8:34 AM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import Head from 'next/head';
import { Button } from '@chakra-ui/react';
import {nextBlue} from '../constants/color.scheme';
import Router from 'next/router';
import Cookies from 'js-cookie';

const Login: React.FC = () => {
    return (
        <>
            <Head>
                <meta property="og:title" content="Home Page"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://exclaimation.netlify.app/"/>
                <meta property="og:image" content="https://docs.google.com/uc?export=download&id=1YJ3qp7-_dsW_JvCbKXHJUVeuXTR_vaEW"/>
                <meta property="og:description"
                    content="Login page" />
                <title> { 'Graph of Thoughts Login' } </title>
            </Head>
            <header className="App-header">
                <Button
                    color={nextBlue}
                    variant="ghost"
                    onClick={() => {
                        Cookies.set('thoughts-email', process.env.NEXT_PUBLIC_ADMIN || '', { expires: 1 });
                        Router.push('/').catch(console.log);
                    }}
                    boxShadow="dark-lg"
                > Login </Button>
            </header>
        </>
    );
};

export default Login;
