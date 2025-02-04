import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';

import {MODEL, TEXTURE, NORMAL_MAP, IMAGE, VIDEO, VIDEOS} from '../../constants';
import { ROUTES } from '../../../router/router';

const PRODUCT_TO_RENDER = [
    // Table: Front-Bottom Center : iPhones
    {
        model: MODEL.IPHONE_16_PRO.ID,
        scale: '1.5 1.5 1.5',
        position: '15.32525 1.121 -12.92608',
        rotation: '-11.523327175671117 -17.374945137342216 0',
    },
    {
        model: MODEL.IPHONE_16_PRO.ID,
        scale: '1.5 1.5 1.5',
        position: '15.82205 1.121 -12.75395',
        rotation: '-11.523 -17.375 0',
    },
    {
        model: MODEL.IPHONE_16_PRO.ID,
        scale: '1.5 1.5 1.5',
        position: '16.24053 1.11046 -12.55874',
        rotation: '-11.522754217875987 -25.046850014143935 0',
    },
    {
        model: MODEL.IPAD_PRO_V1.ID,
        scale: '0.7 0.7 0.7',
        position: '16.83006 0.61829 -12.21599',
        rotation: '14.99 -200 0',
    },

    // Table: Front-Left : iMac(s)
    {
        model: MODEL.IMAC_YELLOW.ID,
        scale: '0.12 0.12 0.12',
        position: '9.02465 1.10237 -7.57484',
        rotation: '0 -106.25 0',
    },
    {
        model: MODEL.IMAC_GREEN.ID,
        scale: '0.04 0.04 0.04',
        position: '8.27273 1.10237 -6.32263',
        rotation: '0 70 0',
    },

    // Table : Bottom-Left : Mac Mini, Watch and iPad Pro
    {
        model: MODEL.MAC_MINI.ID,
        scale: '0.07 0.07 0.07',
        position: '9.85 1.15 -10.83',
        rotation: '0 73.18 0',
    },
    {
        model: MODEL.WATCH.ID,
        scale: '0.0002 0.0002 0.0002',
        position: '10.09236 1.1805 -11.627',
        rotation: '47.02 74.63 0.69',
    },
    {
        model: MODEL.IPAD_PRO_V2.ID,
        scale: '1.2 1.2 1.2',
        position: '10.58 1.119 -12.292',
        rotation: '0 -18.453 0',
    },

    // Table: Front-Right : MBPs
    {
        model: MODEL.MBP_BLACK.ID,
        scale: '0.13 0.13 0.13',
        position: '18.30029 1.10375 -3',
        rotation: '0 -93.620 0',
    },
    {
        model: MODEL.MBP_SILVER.ID,
        scale: '0.13 0.13 0.13',
        position: '18.72595 1.10685 -4.5',
        rotation: '0 -96.63 0',
    },

    // Table: Bottom-Right Table : AVPs
    {
        model: MODEL.VISION_PRO.ID,
        scale: '1 1 1',
        position: '19.753 1.181 -7.782',
        rotation: '0 -167.195 0',
    },
    {
        model: MODEL.VISION_PRO.ID,
        scale: '1 1 1',
        position: '20.198 1.181 -9.354',
        rotation: '0 -167.195 0',
    },
    {
        model: MODEL.VISION_PRO.ID,
        scale: '1 1 1',
        position: '19.986 1.182 -8.647',
        rotation: '0 -167.195 0',
    },


];

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

            <a-entity scale="0.9 0.9 0.9"
                      position="3 0 -4.5"
                      rotation="0 -17 0"
                      gltf-model={`#${MODEL.STORE.ID}`}
            />

            <a-plane src={`#${TEXTURE.GRASS.ID}`}
                     normal-map={`#${NORMAL_MAP.GRASS.ID}`}
                     normal-texture-repeat="30 30"
                     normal-scale="1 -1"
                     roughness="0.4"
                     repeat="30 30"
                     height="100"
                     width="100"
                     rotation="-90 -17 0"
                     position="0 -0.2 -2"
            />
            <a-sky src={`#${IMAGE.STREET.ID}`}
                   radius="250"
                   position="0 50 0"
                   rotation="0 120 0"
            />

            {PRODUCT_TO_RENDER.map((product, index) => (
                <a-entity
                    key={index}
                    gltf-model={`#${product.model}`}
                    scale={product.scale}
                    position={product.position}
                    rotation={product.rotation}
                />
            ))}

            {/*
            <a-video src={`#${VIDEO.AVP.ID}`}
                     width="3"
                     height="1.5"
                     position="23.5 1.33266 -13"
                     rotation="0 -50 0"
                     scale="1.76112 1.76112 1.76112"
            />
            */}
        </>
    )
};

export default Store;