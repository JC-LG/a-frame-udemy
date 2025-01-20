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


AFRAME.registerComponent('cursor-listener', {
    init: function () {
        var lastIndex = -1;
        var COLORS = ['red', 'green', 'blue'];
        this.el.addEventListener('click', function (evt) {
            lastIndex = (lastIndex + 1) % COLORS.length;
            this.setAttribute('material', 'color', COLORS[lastIndex]);
            console.log('I was clicked at: ', evt.detail.intersection.point);
        });
    }
});