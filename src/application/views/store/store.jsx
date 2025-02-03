import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';

import {MODEL, TEXTURE, NORMAL_MAP, IMAGE, VIDEO, VIDEOS} from '../../constants';
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
            {/*<a-entity*/}
            {/*    // scale="0.9 0.9 0.9"*/}
            {/*    //       position="3 -10.1 -4.5"*/}
            {/*    //       rotation="0 -17 0"*/}


            {/*    scale="50 50 50"*/}
            {/*    position="0 11.5 0"*/}
            {/*    rotation="0 10 0"*/}


            {/*    gltf-model={`#${MODEL.LONDON.ID}`}*/}
            {/*/>*/}

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

            <a-entity


                scale="0.7 0.7 0.7" position="16.83006 0.61829 -12.21599" rotation="14.999999999999998 -200 0"

                gltf-model={`#${MODEL.IPAD_PRO_V1.ID}`}
            />

            {/* Front-Left : iMacs */}
            <a-entity scale="0.13851 0.13851 0.13851"
                      position="9.02465 1.10237 -7.57484"
                      rotation="0 -106.25273127583064 0"
                      gltf-model={`#${MODEL.IMAC_YELLOW.ID}`}
            />
            <a-entity scale="0.00015 0.00015 0.00015"
                      position="8.27273 1.10237 -6.32263"
                      rotation="0 70 0"
                      gltf-model={`#${MODEL.IMAC_GREEN.ID}`}
            />

            {/* Bottom-Left : Mac Mini */}

            <a-entity
                scale="0.07 0.07 0.07" position="9.8509 1.1517 -10.83134" rotation="0 73.18561804544545 0"
                gltf-model={`#${MODEL.MAC_MINI.ID}`}
            />


            <a-entity
                scale="0.0002 0.0002 0.0002"
                position="10.09236 1.1805 -11.627"
                rotation="47.02092737300127 74.63462830933129 0.6967166788790811"
                gltf-model={`#${MODEL.WATCH.ID}`}
            />

            <a-entity

                scale="1.2 1.2 1.2"
                position="10.58772 1.119 -12.29281" rotation="0 -18.453251707778424 0"


                gltf-model={`#${MODEL.IPAD_PRO_V2.ID}`}
            />


            {/* Front-Right Table : MBPs */}
            <a-entity scale="0.14 0.14 0.14"
                      position="18.30029 1.10375 -3"
                      rotation="0 -93.62073076658139 0"
                      gltf-model={`#${MODEL.MBP_BLACK.ID}`}
            />
            <a-entity scale="0.14 0.14 0.14"
                      position="18.72595 1.10685 -4.5"
                      rotation="0 -96.6304780644036 0"
                      gltf-model={`#${MODEL.MBP_SILVER.ID}`}
            />

            {/* Bottom-Right Table : AVPs */}

            <a-entity scale="" position="19.75326 1.18196 -7.78245" rotation="0 -167.1953871549207 0"
                      gltf-model={`#${MODEL.VISION_PRO.ID}`}
            />

            <a-entity scale="" position="20.19826 1.18196 -9.35461" rotation="0 -167.1953871549207 0"
                      gltf-model={`#${MODEL.VISION_PRO.ID}`}/>

            <a-entity scale="" position="19.98681 1.182 -8.6473" rotation="0 -167.195 0"
                      gltf-model={`#${MODEL.VISION_PRO.ID}`}/>

            {/*<a-video src={`#${VIDEO.AVP.ID}`}*/}
            {/*         width="3"*/}
            {/*         height="1.5"*/}
            {/*         position="23.5 1.33266 -13"*/}
            {/*         rotation="0 -50 0"*/}
            {/*         scale="1.76112 1.76112 1.76112"*/}
            {/*    />*/}


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
            {/*<a-sky src={`#${IMAGE.REST.ID}`}*/}
            {/*       radius="300"*/}
            {/*       position="0 30 0"*/}
            {/*       rotation="0 -150 0"*/}
            {/*/>*/}

            </>
            )
            };

export default Store;