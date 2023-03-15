import React, { useState } from 'react'
import useNFTDetailsFromURI from '../hooks/useNFTDetailsFromURI';
import Image from 'next/image';

const ImageWithFallback = (props: any) => {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);
    return (
        <Image
            {...rest}
            src={imgSrc}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};

export default ImageWithFallback;

export const DisplayNFT = ({ uri }: { uri: string }) => {


    const { fetchData, keu } = useNFTDetailsFromURI(
        { item: uri })

    return (
        <ImageWithFallback src={keu} fallbackSrc={fetchData} className=" w-full" width="600" height="600" alt="" />
        // <div>DisplayNFT {keu}</div>
        // <img src={keu} className='w-60 aspect-square'/>
    )
}