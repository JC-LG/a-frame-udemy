import React, { useLayoutEffect } from 'react';

import { SCENE_ELEMENTS } from '../../constants';
// import { injectScript } from '../../utils/dom';

// import {
//     update as handyWorkUpdate,
//     loadPose
// } from '../../../../node_modules/handy-work/build/esm/handy-work';
//
// const HANDY_WORK_CDN = 'https://cdn.jsdelivr.net/npm/handy-work@3.1.11';
//
// loadPose('relax', `${HANDY_WORK_CDN}/poses/relax.handpose`);
// loadPose('point', `${HANDY_WORK_CDN}/poses/relax.handpose`);

// const HANDY_WORK_CDN_URL =  'https://cdn.jsdelivr.net/npm/handy-work@3.1.11/build/handy-controls.min.js';

/**
 * simple-navmesh-constraint {@link https://github.com/AdaRoseCannon/aframe-xr-boilerplate?tab=readme-ov-file#simple-navmesh-constraintjs}
 * blink-controls {@link https://github.com/jure/aframe-blink-controls?tab=readme-ov-file#properties}
 *
 * @param children
 * @returns {JSX.Element}
 */
const Teleport = ({ children }) => {

    // useLayoutEffect(() => {
    //     injectScript({
    //         src: `${HANDY_WORK_CDN_URL}?pulled=${Date.now()}`,
    //         attributes: { defer: true }
    //     })
    // }, []);

    return (
        <a-entity
            id="cameraRig"
            simple-navmesh-constraint="navmesh: .navmesh;
                                                fall: 0.5;
                                                height: 0;
                                                exclude: .navmesh-hole;
                                      "
            movement-controls={`speed: 0.15;
                                camera: #${SCENE_ELEMENTS.HEAD};
                                `}
            position="1 0 -1"
            rotation="0 0 0"
        >
            <a-entity id={SCENE_ELEMENTS.HEAD} camera="near:0.01;" look-controls="pointerLockEnabled: false" position="0 1.65 0"/>
            <a-entity handy-controls={true}>
                <a-entity data-right="index-finger-tip"
                          mixin="blink"
                          blink-controls="snapTurn: false;
                                          startEvents: pose_point_fuseShort;
                                          endEvents: pose_point_fuseLong;
                                          cancelEvents: pose_cancel_point;"
                ></a-entity>
                <a-entity data-left="index-finger-tip"
                          mixin="blink"
                          blink-controls="snapTurn: false;
                                          startEvents: pose_point_fuseShort;
                                          endEvents: pose_point_fuseLong;
                                          cancelEvents: pose_cancel_point;"
                ></a-entity>
            </a-entity>
        </a-entity>
    )

};

export default Teleport;