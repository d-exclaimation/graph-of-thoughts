//
//  FormModal.ts
//  app
//
//  Created by d-exclaimation on 2:28 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react';
import {favRed, nextBlue} from '../../constants/color.scheme';

interface Props {
    title: string,
    isShown: boolean,
    onCancel: () => void,
    onConfirm: () => void,
    body: JSX.Element
}

const FormModal: React.FC<Props> = ({title, isShown, onConfirm, onCancel, body}: Props) => {
    return (
        <Modal
            size={'2xl'}
            isOpen={isShown}
            onClose={onCancel}
        >
            <ModalOverlay />
            <ModalContent bg={'#282c34'} color={'#fafafa'}>
                <ModalHeader> { title } </ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    { body }
                </ModalBody>

                <ModalFooter>
                    <Button
                        onClick={onConfirm}
                        color={nextBlue}
                        variant="ghost"
                        shadow="dark-lg"
                        mr={3}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={onCancel}
                        color={favRed}
                        variant="ghost"
                        shadow="dark-lg"
                    >Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default FormModal;
