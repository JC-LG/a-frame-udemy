import 'aframe';
import './style.css';

AFRAME.registerComponent('foo', {
    init: function () {
        setTimeout(() => {
            this.el.setAttribute('height', '20')
        }, 2000)
        const sceneEl = document.querySelector('a-scene');
        console.log(sceneEl.querySelectorAll('a-camera'));
    }
});
