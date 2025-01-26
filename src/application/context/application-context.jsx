import React, { useContext, useState, useEffect } from 'react';

import LoadingScreen from '../../loading-screen/loading-screen';
import AssetManagement from '../asset-management/asset-management';

const APPLICATION_STATE = {
    isLoading: true,
    loadingTimeout: 6000,
    enableDefaultLoadingScreen: false,
};

const ApplicationContext = React.createContext({APPLICATION_STATE});

const ApplicationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading ] = useState(APPLICATION_STATE.isLoading);

    useEffect(() => {
        window.setTimeout(setIsLoading, APPLICATION_STATE.loadingTimeout, false);
    }, []);

    const value = {
        isLoading,
    };

    return (
        <ApplicationContext.Provider value={value}>
            <a-scene
                loading-screen={`enabled: ${APPLICATION_STATE.enableDefaultLoadingScreen};`}
                physx="autoLoad: true; delay: 1000; wasmUrl: https://cdn.jsdelivr.net/gh/c-frame/physx@v0.1.2/wasm/physx.release.wasm; useDefaultScene: false;"
                webxr="overlayElement:#dom-overlay;"
                // background="color:skyblue;"
                reflection="directionalLight:#dirlight;"
                renderer="alpha:true;physicallyCorrectLights:true;colorManagement:true;exposure:2;toneMapping:ACESFilmic;"
                ar-hit-test="target:#my-ar-objects;type:footprint;footprintDepth:0.2;"
                shadow="type: pcfsoft"
                gltf-model="dracoDecoderPath: https://www.gstatic.com/draco/versioned/decoders/1.5.7/;"
                ar-cursor raycaster="objects: #my-ar-objects a-sphere"
                xr-mode-ui="XRMode:xr"
                >
                <AssetManagement/>
                {isLoading ? (
                    <LoadingScreen/>
                ) : (
                    <>{children}</>
                )}
            </a-scene>
        </ApplicationContext.Provider>
    );
};

const useApplicationContext = () => useContext(ApplicationContext);

export { ApplicationContextProvider, useApplicationContext };
