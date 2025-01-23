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
                <img key={id} id={id} src={src}/>
            ))}
            <a-asset-item id="right-gltf"
                          src="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/skeleton-right-hand-webxr/model.gltf"></a-asset-item>
            <a-asset-item id="left-gltf"
                          src="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/skeleton-left-hand-webxr/model.gltf"></a-asset-item>
            <a-mixin id="blink"
                     blink-controls="rotateOnTeleport:false;cameraRig: #cameraRig; teleportOrigin: #head; collisionEntities:.navmesh;"></a-mixin>

        </a-assets>
    )
};

export default AssetManagement;