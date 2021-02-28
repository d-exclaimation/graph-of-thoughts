//
//  Hero.tsx
//  personal-blog
//
//  Created by d-exclaimation on 4:22 PM.
//  Copyright © 2021 d-exclaimation. All rights reserved.
//

import React from 'react';
import { Heading } from '@chakra-ui/react';
import { nextBlue } from '../../constants/color.scheme';

interface HeroProps {
    title? : string,
    size?: string
}

const Hero: React.FC<HeroProps> = ({ title, size }: HeroProps) => {
    return (
        <Heading
            fontSize={ size ?? '6vw' }
            color={nextBlue}
        >
            { title ?? 'Next.js' }
        </Heading>
    );
};

export default Hero;
