import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';

import { MODEL, TEXTURE, NORMAL_MAP, IMAGE } from '../../constants';
import { ROUTES } from '../../../router/router';

const Store = () => {
    const navigate = useNavigate();

    const goToProduct = useCallback((productId) => {
        if (productId) {
            navigate(`${ROUTES.PRODUCT.PATH}/${productId}`);
        }
    }, [navigate]);

    const goToConfiguration = useCallback((productId) => {
        if (productId) {
            navigate(`${ROUTES.CONFIGURATION.PATH}/${productId}`);
        }
    }, [navigate]);

    // For debugging form global scope
    window.goToProduct = goToProduct;
    window.goToConfiguration = goToConfiguration;

    return (
        <>
            <a-entity scale="1 1 1"
                      position="3 0 -4.5"
                      rotation="0 -17 0"
                      gltf-model={`#${MODEL.STORE.ID}`}
            />
            {/*<a-entity scale="0.02 0.02 0.02"*/}
            {/*          position="9 1.4 -6.5"*/}
            {/*          rotation="0 -17 0"*/}
            {/*          gltf-model={`#${MODEL.VISION_PRO.ID}`}*/}
            {/*/>*/}
            <a-entity scale="1.5 1.5 1.5"
                      position="9.7 1.3 -7.5"
                      rotation="0 80 0"
                      gltf-model={`#${MODEL.IPHONE_16_PRO.ID}`}
            />
            <a-entity scale="0.2 0.2 0.2"
                      position="20 1.25 -3"
                      rotation="0 -110 0"
                      gltf-model={`#${MODEL.MBP_BLACK.ID}`}
            />
            <a-entity scale="0.2 0.2 0.2"
                      position="20.5 1.25 -4.5"
                      rotation="0 -110 0"
                      gltf-model={`#${MODEL.MBP_SILVER.ID}`}
            />

            {/*<a-plane src={`#${TEXTURE.BRICK.ID}`}*/}
            {/*         normal-map={`#${NORMAL_MAP.BRICK.ID}`}*/}
            {/*         normal-texture-repeat="20 20"*/}
            {/*         normal-scale="1 -1"*/}
            {/*         roughness="0.9"*/}
            {/*         repeat="20 20"*/}
            {/*         height="20"*/}
            {/*         width="21"*/}
            {/*         position="-3.5 .1 -14"*/}
            {/*         rotation="-90 -17 0"*/}
            {/*/>*/}
            <a-plane src={`#${TEXTURE.GRASS.ID}`}
                     normal-map={`#${NORMAL_MAP.GRASS.ID}`}
                     normal-texture-repeat="30 30"
                     normal-scale="1 -1"
                     roughness="0.4"
                     repeat="30 30"
                     height="100"
                     width="100"
                     rotation="-90 0 0"
                     position="0 -0.1 -1"
            />
            <a-sky src={`#${IMAGE.YOSEMITE.ID}`}
                   radius="300"
                   position="0 0 0"
                   rotation="0 -10 0"
            />
        </>
    )
};

export default Store;