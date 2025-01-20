import 'aframe';
import React from 'react';

import Store from './views/store/store';
import ProductExplorer from './components/product-explorer/product-explorer';

const Application = () => {

    return (
        <>
            <a-camera position="0 1.6 0"></a-camera>
            <Store/>

            {/*<ProductExplorer modelId="apple-pencil-pro"*/}
            {/*                 scale={{x: 4, y: 4, z: 4}}*/}
            {/*                 position={{y: 1.5, z: -1}}*/}
            {/*/>*/}

            {/*<ProductExplorer modelId="apple-watch"*/}
            {/*                 scale={{x: .001, y: .001, z: .001}}*/}
            {/*                 position={{y: 1.6, z: -1}}*/}
            {/*                 rotation={{x: 60}}*/}
            {/*/>*/}

            {/*<ProductExplorer modelId="iphone-16-pro"*/}
            {/*                 scale={{x: 3, y: 3, z: 3}}*/}
            {/*                 position={{y: 1.4, z: -1}}*/}
            {/*/>*/}

            {/*<ProductExplorer modelId="iphone-16-pro"*/}
            {/*                 scale={{x: 4, y: 4, z: 4}}*/}
            {/*                 position={{y: 1.4, z: -0.7}}*/}
            {/*/>*/}

            {/*<ProductExplorer modelId="macbook-pro-black"*/}
            {/*                 scale={{x: 0.2, y: 0.2, z: 0.2}}*/}
            {/*                 position={{x: 1, y: 1.3, z: -1}}*/}
            {/*                 rotation={{x: 30}}*/}
            {/*/>*/}

            {/*<ProductExplorer modelId="macbook-pro-silver"*/}
            {/*                 scale={{x: 0.2, y: 0.2, z: 0.2}}*/}
            {/*                 position={{y: 1.3, z: -1}}*/}
            {/*                 rotation={{x: 30}}*/}
            {/*/>*/}
        </>
    );
};

export default Application;