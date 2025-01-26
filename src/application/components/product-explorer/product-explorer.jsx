import React from 'react';

import { DEFAULT, format3DPoint } from './constants';

const { POSITION, ROTATION, SCALE} = DEFAULT;

const ProductExplorer = ({ modelId, position, rotation, scale }) => {
    const gltfModel = `#${modelId}`;

    const productPosition = format3DPoint({
        ...POSITION,
        ...position
    });

    const productRotation = format3DPoint({
        ...ROTATION,
        ...rotation
    });

    const productScale = format3DPoint({
        ...SCALE,
        ...scale
    });

    return (
        <>
            <a-entity id={modelId}
                      scale={productScale}
                      position={productPosition}
                      rotation={productRotation}
                      gltf-model={gltfModel}
            />
        </>
    );
};

export default ProductExplorer;