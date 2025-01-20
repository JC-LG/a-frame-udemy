import React from 'react';

const Store = () => {
    return (
        <>
            <a-entity scale="1 1 1"
                      position="5 0 3"
                      rotation="0 -17 0"
                      // gltf-model="#apple-store"
                      gltf-model="#apple-store-legacy"
            />
            <a-plane src="#brick"
                     normal-map="#brick-normal"
                     normal-texture-repeat="20 20"
                     normal-scale="1 -1"
                     roughness="0.9"
                     repeat="20 20"
                     height="20"
                     width="21"
                     position="-1.5 .01 -8"
                     rotation="-90 -17 0"
            />
            <a-plane src="#grass"
                     normal-map="#grass-normal"
                     normal-texture-repeat="30 30"
                     normal-scale="1 -1"
                     roughness="0.4"
                     repeat="30 30"
                     height="100"
                     width="100"
                     rotation="-90 0 0"
                     position="0 0 -1"
            />
            <a-sky src="#yosemite"
                   radius="1000"
                   position="0 900 0"
                   rotation="0 -60 0"
            />
        </>
    )
};

export default Store;