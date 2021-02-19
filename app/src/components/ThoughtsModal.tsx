//
//  ThoughtsModal.tsx
//  app
//
//  Created by d-exclaimation on 2:08 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import {
    FormControl,
    FormLabel,
    Input,
    Textarea
} from '@chakra-ui/react';
import FormModal from './FormModal';
import {nextBlue} from '../constants/color.scheme';

interface Props {
    isOpen: boolean,
    onClose: () => void,
    onConfirm: (title: string, body: string) => void,
}

export const ThoughtsModal: React.FC<Props> = ({ isOpen, onConfirm, onClose }: Props) => {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');

    React.useEffect(() => {
        setTitle('');
        setBody('');
    }, []);

    return (
        <>
            <FormModal isShown={isOpen} onCancel={onClose} onConfirm={() => onConfirm(title, body)} body={
                (<>
                    <FormControl>
                        <FormLabel> Title </FormLabel>
                        <Input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            color={nextBlue}
                            variant="flushed"
                            placeholder="Enter title" />
                    </FormControl>

                    <FormControl mt={4}>
                        <FormLabel> Body </FormLabel>
                        <Textarea
                            value={body}
                            onChange={e => setBody(e.target.value)}
                            color={nextBlue}
                            variant="flushed"
                            placeholder="Enter your thoughts"
                        />
                    </FormControl>
                </>)
            }/>
        </>
    );
};

export default ThoughtsModal;
