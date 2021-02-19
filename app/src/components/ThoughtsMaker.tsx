//
//  ThoughtsMaker.tsx
//  app
//
//  Created by d-exclaimation on 1:33 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { Button } from '@chakra-ui/react';
import ThoughtsModal from './ThoughtsModal';

import {useDynamicCorner} from '../lib/useDynamicCorner';
import {useDynamicSize} from '../lib/useDynamicSize';
import {nextBlue} from '../constants/color.scheme';
import {User} from '../models/users';
import {postThoughts} from '../lib/GetThoughts';

interface Props {
    user: User,
    rehydrate: () => void,
}

const ThoughtsMaker: React.FC<Props> = ({ user, rehydrate }: Props) => {
    const { x, y } = useDynamicCorner();
    const size = useDynamicSize();
    const [isOpen, setOpen] = React.useState(false);
    const onClose = () => {
        setOpen(false);
    };
    const onOpen = () => {
        setOpen(true);
    };
    const onConfirm = (title: string, body: string) => {
        postThoughts(user, title, body);
        rehydrate();
        onClose();
    };

    return (
        <>
            <Button
                position="absolute"
                top={y} right={x}
                onClick={onOpen}
                size={size}
                color={nextBlue}
                variant="ghost"
                boxShadow="dark-lg"
            >
                New
            </Button>
            <ThoughtsModal isOpen={isOpen} onClose={onClose} onConfirm={onConfirm}/>
        </>
    );
};

export default ThoughtsMaker; 
