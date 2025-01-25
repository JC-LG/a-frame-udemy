import 'aframe';
// import 'aframe-event-set-component';
// import 'super-hands';

import './style.css';

// AFRAME.registerComponent('foo', {
//     init: function () {
//         setTimeout(() => {
//             this.el.setAttribute('height', '20')
//         }, 2000)
//         const sceneEl = document.querySelector('a-scene');
//         console.log(sceneEl.querySelectorAll('a-camera'));
//     }
// });
//
//
// AFRAME.registerComponent('cursor-listener', {
//     init: function () {
//         var lastIndex = -1;
//         var COLORS = ['red', 'green', 'blue'];
//         this.el.addEventListener('click', function (evt) {
//             lastIndex = (lastIndex + 1) % COLORS.length;
//             this.setAttribute('material', 'color', COLORS[lastIndex]);
//             console.log('I was clicked at: ', evt.detail.intersection.point);
//         });
//     }
// });

/**
 * this might not be required anymore
 * I see the toggle state working without it in 1.6.0
 */
// AFRAME.registerComponent('refresh-obj', {
//     init: function () {
//         this.el.addEventListener('click', function () {
//             const myGBcursor = document.querySelector('#myGBcursor');
//             myGBcursor.components.raycaster.refreshObjects();
//         });
//     }
// });
