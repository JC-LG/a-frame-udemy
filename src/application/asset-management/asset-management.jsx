import React from 'react';
import { IMAGES, TEXTURES, NORMAL_MAPS, MODELS } from './constants';

const ALL_IMAGES = [
    ...TEXTURES,
    ...NORMAL_MAPS,
    ...IMAGES
];

const AssetManagement = () => {
    return (
        <a-assets>
            {MODELS.map(({id, src}) => (
                <a-asset-item key={id} id={id} src={src}/>
            ))}
            {ALL_IMAGES.map(({id, src}) => (
                <img key={id} id={id} src={src} />
            ))}
        </a-assets>
    )
};

export default AssetManagement;