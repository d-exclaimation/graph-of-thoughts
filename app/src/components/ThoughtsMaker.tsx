//
//  ThoughtsMaker.tsx
//  app
//
//  Created by d-exclaimation on 1:33 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';

import { Button } from '@chakra-ui/react';
import {useDynamicCorner} from '../lib/useDynamicCorner';
import {useDynamicSize} from '../lib/useDynamicSize';
import {nextBlue} from '../constants/color.scheme';


const ThoughtsMaker: React.FC = () => {
    const { x, y } = useDynamicCorner();
    const size = useDynamicSize();

    return (
        <>
            <Button
                position="absolute"
                top={y} right={x}
                size={size}
                color={nextBlue}
                variant="ghost"
                boxShadow="dark-lg"
            >
                New
            </Button>
        </>
    );
};

export default ThoughtsMaker; 
