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
import FormModal from './templates/FormModal';
import {nextBlue} from '../constants/color.scheme';

interface Props {
    isOpen: boolean,
    onClose: () => void,
    onConfirm: (title: string, body: string, imageURL: string | null) => void,
}

export const ThoughtsModal: React.FC<Props> = ({ isOpen, onConfirm, onClose }: Props) => {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const [image, setImage] = React.useState('');

    React.useEffect(() => {
        setTitle('');
        setBody('');
        setImage('');
    }, []);

    return (
        <>
            <FormModal title={'New Thought'} isShown={isOpen} onCancel={onClose} onConfirm={() => onConfirm(title, body, image.length ? image : null)} body={
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
                    <FormControl>
                        <FormLabel> Image URL </FormLabel>
                        <Input
                            value={image}
                            onChange={e => setImage(e.target.value)}
                            color={nextBlue}
                            variant="flushed"
                            placeholder="Enter image URL (optional)" />
                    </FormControl>
                </>)
            }/>
        </>
    );
};

export default ThoughtsModal;
