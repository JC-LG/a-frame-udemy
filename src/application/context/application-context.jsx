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
            <a-scene loading-screen={`enabled: ${APPLICATION_STATE.enableDefaultLoadingScreen};`}>
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
