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
            <a-plane src={`#${TEXTURE.BRICK.ID}`}
                     normal-map={`#${NORMAL_MAP.BRICK.ID}`}
                     normal-texture-repeat="20 20"
                     normal-scale="1 -1"
                     roughness="0.9"
                     repeat="20 20"
                     height="20"
                     width="21"
                     position="-3.5 .1 -14"
                     rotation="-90 -17 0"
            />
            <a-plane src={`#${TEXTURE.GRASS.ID}`}
                     normal-map={`#${NORMAL_MAP.GRASS.ID}`}
                     normal-texture-repeat="30 30"
                     normal-scale="1 -1"
                     roughness="0.4"
                     repeat="30 30"
                     height="100"
                     width="100"
                     rotation="-90 0 0"
                     position="0 0 -1"
            />
            <a-sky src={`#${IMAGE.YOSEMITE.ID}`}
                   radius="1000"
                   position="0 900 0"
                   rotation="0 -60 0"
            />
        </>
    )
};

export default Store;