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
            <a-entity scale="0.9 0.9 0.9"
                      position="3 0 -4.5"
                      rotation="0 -17 0"
                      gltf-model={`#${MODEL.STORE.ID}`}
            />
            {/*<a-entity scale="0.02 0.02 0.02"*/}
            {/*          position="9 1.4 -6.5"*/}
            {/*          rotation="0 -17 0"*/}
            {/*          gltf-model={`#${MODEL.VISION_PRO.ID}`}*/}
            {/*/>*/}

            {/* Front-Bottom Center : iPhones */}
            <a-entity scale="1.5 1.5 1.5"
                      position="15.32525 1.121 -12.92608"
                      rotation="-11.523327175671117 -17.374945137342216 0"
                      gltf-model={`#${MODEL.IPHONE_16_PRO.ID}`}
            />

            <a-entity scale="1.5 1.5 1.5"
                      position="15.82205 1.121 -12.75395"
                      rotation="-11.523 -17.375 0"
                      gltf-model={`#${MODEL.IPHONE_16_PRO.ID}`}
            />

            <a-entity scale="1.5 1.5 1.5"
                      position="16.24053 1.11046 -12.55874"
                      rotation="-11.522754217875987 -25.046850014143935 0"
                      gltf-model={`#${MODEL.IPHONE_16_PRO.ID}`}
            />

            <a-entity scale="1.5 1.5 1.5"
                      position="16.8167 1.11 -12.41127"
                      rotation="-11.523 -25.047 0"
                      gltf-model={`#${MODEL.IPHONE_16_PRO.ID}`}
            />

            {/* Front-Left : iMacs */}
            <a-entity scale="0.14851 0.14851 0.14851"
                      position="9.02465 1.10237 -7.57484"
                      rotation="0 -106.25273127583064 0"
                      gltf-model={`#${MODEL.IMAC_YELLOW.ID}`}
            />
            <a-entity scale="0.0002 0.0002 0.0002"
                      position="8.27273 1.10237 -6.32263"
                      rotation="0 70 0"
                      gltf-model={`#${MODEL.IMAC_GREEN.ID}`}
            />


                {/* Front-Right Table : MBPs */}
            <a-entity scale="0.15 0.15 0.15"
                      position="18.30029 1.10375 -3"
                      rotation="0 -93.62073076658139 0"
                      gltf-model={`#${MODEL.MBP_BLACK.ID}`}
            />
            <a-entity scale="0.15 0.15 0.15"
                      position="18.72595 1.10685 -4.5"
                      rotation="0 -96.6304780644036 0"
                      gltf-model={`#${MODEL.MBP_SILVER.ID}`}
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