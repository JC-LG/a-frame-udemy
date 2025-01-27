import React from 'react';
import { SCENE_ELEMENTS, IMAGES, TEXTURES, NORMAL_MAPS, MODELS } from '../constants';

const ALL_IMAGES = [
    ...TEXTURES,
    ...NORMAL_MAPS,
    ...IMAGES
];

const AssetManagement = () => {
    return (
        <a-assets>
            {MODELS.map(({ ID, SRC }) => (
                <a-asset-item key={ID} id={ID} src={SRC} />
            ))}
            {ALL_IMAGES.map(({ID, SRC}) => (
                <img key={ID} id={ID} src={SRC} />
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