'use client';

import Image from 'next/image';
import { useState } from 'react';

const CustomImage = ({ image, title = 'image', fill = false, priority = false, className1 = '' }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Image
            src={image}
            alt={title}
            fill={fill} // fill shart bo'lsa ishlaydi
            className={`object-contain ease-in-out group-hover:opacity-75 ${
                isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
            } ${className1}`}
            onLoad={() => setIsLoading(false)}
            priority={priority}
            loading={priority ? 'eager' : 'lazy'} // Priority bo'lsa eager, aks holda lazy yuklanadi
            blurDataURL="data:image/svg+xml;base64,..." // Placeholder qo'shish (ixtiyoriy)
            placeholder="blur"
        />
    );
};

export default CustomImage;
