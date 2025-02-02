import React from 'react';
import { SCENE_ELEMENTS, IMAGES, TEXTURES, NORMAL_MAPS, MODELS, VIDEOS } from '../constants';

const { PROD} = import.meta.env;


const ALL_IMAGES = [
    ...TEXTURES,
    ...NORMAL_MAPS,
    ...IMAGES
];

const AssetManagement = () => {
    return (
        <a-assets>
            {MODELS.map(({ID, SRC}) => (
                <a-asset-item key={ID} id={ID} src={SRC}/>
            ))}
            {ALL_IMAGES.map(({ID, SRC}) => (
                <img key={ID} id={ID} src={SRC}/>
            ))}
            {VIDEOS.map(({ID, SRC}) => (
                <video key={ID} id={ID} src={SRC}
                       // autoPlay={PROD}
                       autoPlay={true}
                       loop={true}
                />
            ))}
            <a-mixin id="blink"
                 blink-controls={`
                            rotateOnTeleport: false;
                            cameraRig: #${SCENE_ELEMENTS.CAMERA_RIG};
                            teleportOrigin: #${SCENE_ELEMENTS.HEAD};
                            collisionEntities: .navmesh;
                         `}
                />
        </a-assets>
    )
};

export default AssetManagement;