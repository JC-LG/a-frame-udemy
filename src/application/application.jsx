import 'aframe';
import 'aframe-extras';
import 'aframe-blink-controls';
// import 'handy-work';

import React from 'react';

import Store from './views/store/store';
import ProductExplorer from './components/product-explorer/product-explorer';

const Application = () => {

    return (
        <>
            {/*<a-camera position="0 1.6 0"></a-camera>*/}
            <a-entity
                id="cameraRig"
                simple-navmesh-constraint="navmesh:.navmesh;fall:0.5;height:0;exclude:.navmesh-hole;"
                movement-controls="speed:0.15;camera:#head;"
                position="-1 0 1" rotation="0 45 0" origin-on-ar-start
            >
                <a-entity id="head" camera="near:0.01;" look-controls="pointerLockEnabled: false" position="0 1.65 0" />

                <a-entity handy-controls="right:#right-gltf;materialOverride:right;"
                          material="color:gold;metalness:1;roughness:0;">
                    <a-entity data-right="index-finger-tip" mixin="blink"
                              blink-controls="snapTurn:false;startEvents:pose_point_fuseShort;endEvents:pose_point_fuseLong;cancelEvents:pose_cancel_point;"></a-entity>
                    <a-entity data-left="index-finger-tip" mixin="blink"
                              blink-controls="snapTurn:false;startEvents:pose_point_fuseShort;endEvents:pose_point_fuseLong;cancelEvents:pose_cancel_point;"></a-entity>

                    <a-entity data-right="ray" mixin="blink" cursor=""
                              raycaster="objects:[html];far:0.3;showLine:false;lineColor:black;">
                        <a-entity position="0 0 -0.22" visible="false" className="pose-label"
                                  text="value: Hello World; align: center;"></a-entity>
                    </a-entity>
                    <a-entity data-left="ray" mixin="blink" cursor=""
                              raycaster="objects:[html];far:0.3;showLine:false;lineColor:black;">
                        <a-entity position="0 0 -0.22" visible="false" className="pose-label"
                                  text="value: Hello World; align: center;"></a-entity>
                    </a-entity>

                    <a-entity id="left-no-magnet" data-left="grip" data-no-magnet>
                        <a-entity html="html:#my-interface;cursor:#cursor" position="-0.142 -0.0166 -0.02928"
                                  rotation="-80 90 0" scale="0.7 0.7 0.7"></a-entity>
                    </a-entity>
                    <a-entity id="right-no-magnet" data-right="grip" data-no-magnet></a-entity>
                </a-entity>
            </a-entity>


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