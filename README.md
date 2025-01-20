# a-frame-udemy
https://jc-lg.github.io/a-frame-udemy/

## Useful links
- https://aframe.io
- https://aframe.io/docs/1.6.0/components/geometry.html

## Coordinates

![info-1.png](renders%2Finfo-1.png)

![info-2.png](renders%2Finfo-2.png)

## Renders

### Section 3: Adding anf Modifying HTML Elements
#### 4. Basic primitives and HTML attributes
![s3-c4.png](renders%2Fs3-c4.png)

#### 5. Position and relative positioning
![s3-c5.png](renders%2Fs3-c5.png)

#### 6. Rotation and relative rotation
![s3-c6.png](renders%2Fs3-c6.png)

#### 7. Scale, relative scale, and reflection

```html
    <a-cylinder ...
                rotation="0 0 0"

```

![s3-c7-img-1.png](renders%2Fs3-c7-img-1.png)

```html
    <a-cylinder ...
                rotation="0 0 90"
```

![s3-c7-img-2.png](renders%2Fs3-c7-img-2.png)

```html
    <a-cylinder ...
                rotation="0 -90 90"
```

![s3-c7-img-3.png](renders%2Fs3-c7-img-3.png)

With these rotation applied, now we need to `scale`:

- `X` to make it taller, instead of `Y` axis.
- `Z` to make it wider, instead of `X` axis.
- `Y` to modify the depth instead of `Z` axis.

Result:
![s3-c7-r1.png](renders%2Fs3-c7-r1.png)

##### Relative scale
```html
    <a-box ...
           rotation="90 0 0"
           scale="1 1 1"
```



![s3-c7-img-4.png](renders%2Fs3-c7-img-4.png)

With these rotation applied, now we need to `scale`:

- `Z` to make it taller, instead of `Y` axis.
- `X` to make it wider.
- `Y` to modify the depth instead of `Z` axis.

```html
    <a-box ...
           rotation="90 0 0"
           scale="2 1 2"
```

![s3-c7-r2.png](renders%2Fs3-c7-r2.png)

![s3-c7-r3.png](renders%2Fs3-c7-r3.png)

#### 8. Image textures and materials
- https://www.textures.com/
- https://xo3d.co.uk/tools/normal-map-creator/

##### Normal Maps: 
In 3D computer graphics, normal mapping, or Dot3 bump mapping, is a texture mapping technique used for 
faking the lighting of bumps and dents – an implementation of bump mapping. It is used to add details without using 
more polygons.A common use of this technique is to greatly enhance the appearance and details of a low polygon model 
by generating a normal map from a high polygon model or height map.

![s3-c8.png](renders%2Fs3-c8.png)


#### 9. Image and Curved primitives
... Pending


#### 10. Breaking Primitives Down

##### PRIMITIVES
Under the hood, they are `<a-entity />` with a semantic name
that have a preset bundle of `COMPONENTS` with default values
and map `HTML` attributes to component data.

##### ENTITIES
They have no appearance, behavior or functionality
until you attach `COMPONENTS` to them 


![s3-c10-1.png](renders%2Fs3-c10-1.png)

![s3-c10-2.png](renders%2Fs3-c10-2.png)

![s3-c10-3.png](renders%2Fs3-c10-3.png)

### Section 4: Modifying the Virtual Environment
#### 11. Ground

```html
<a-scene>
    <a-assets>
        <img id="floor" src="/textures/s3-c8/TCom_Wall_Stone3_2x2_1K_albedo.jpeg" />
        <img id="floor-normal-map" src="/textures/s3-c8/TCom_Wall_Stone3_2x2_1K_albedo_NormalMap.png" />
    </a-assets>
    <a-plane material="color: #999999;
                        src: #floor;
                        repeat: 5 5;
                        normal-map: #floor-normal-map;
                        normal-texture-repeat: 5 5;
                      "
             rotation="-90 0 0"
             scale="10 10 1"
    ></a-plane>
</a-scene>
```
![s4-c11.png](renders%2Fs4-c11.png)

#### 12. Sky and 360 Image
```html
    <a-assets>
        <img id="floor" src="/textures/s3-c8/TCom_Wall_Stone3_2x2_1K_albedo.jpeg" />
        <img id="floor-normal-map" src="/textures/s3-c8/TCom_Wall_Stone3_2x2_1K_albedo_NormalMap.png" />
        <img id="sky" src="/images/clear-sunny-sky.jpg" />
    </a-assets>

    <a-sky src="#sky"
           rotation="0 64 0"
    ></a-sky>

    <a-plane material="color: #999999;
                        src: #floor;
                        repeat: 5000 5000;
                        normal-map: #floor-normal-map;
                        normal-texture-repeat: 5000 5000;
                      "
             rotation="-90 0 0"
             scale="10000 10000 1"
    ></a-plane>
</a-scene>
```

![s4-c12.png](renders%2Fs4-c12-1.png)

```html
<a-scene>
    <a-assets>
        <img id="sky-360" src="/images/s4-12/360-degree-panorama-southern-sky.jpg" />
    </a-assets>

    <a-sky src="#sky-360"></a-sky>
</a-scene>
```

![s4-c12-2.png](renders%2Fs4-c12-2.png)

#### 13. Camera Primitive
The camera position is `0 0 0` but only when you are wearing a headset, 
in desktop mode `0 1.6 0`

```html
<a-camera></a-camera>
```

![s4-c13-1.png](renders%2Fs4-c13-1.png)

![s4-c13-2.png](renders%2Fs4-c13-2.png)

```html
    <a-camera position="0 1.9 0">
    </a-camera>
```

![s4-c13-3.png](renders%2Fs4-c13-3.png)

```html
    <a-entity id="rig" position="0 2 7" rotation="-25 0 0">
        <a-camera id="camera"></a-camera>
    </a-entity>
```

![s4-c13-4.png](renders%2Fs4-c13-4.png)

#### 14. Loading and Displaying 3D Models

```html
<a-scene>
    <a-assets>
        <img id="sky" src="/images/s4-c12/clear-sunny-sky.jpg" />
        <a-asset-item id="castle" src="/models/gltf/castle/scene.gltf"></a-asset-item>
        <a-asset-item id="catapult" src="/models/gltf/catapult/scene.gltf"></a-asset-item>
    </a-assets>

    <a-sky src="#sky"></a-sky>

    <a-camera position="0 1.6 7"></a-camera>

    <a-entity gltf-model="#castle" rotation="-90 0 0" position="0 7 0">
    </a-entity>

    <a-entity gltf-model="#catapult" rotation="4 0 0" position="0 1.8 5" scale=" 0.5 0.5 0.5">
    </a-entity>
</a-scene>
```

![s4-c14.png](renders%2Fs4-c14.png)

#### 15. Animating Objects

```html
<a-scene>
    <a-assets>
        <img id="floor" src="/images/s4-c13/floor-1024.jpg" />
    </a-assets>

    <a-plane src="#floor" shader="flat" rotation="-90 0 0" scale="5 5 1"></a-plane>

    <a-entity position="0 0 8">
        <a-camera></a-camera>
    </a-entity>

    <a-box color="#AA0000"
           position="0 4 0"
           animation="property: rotation;
                      to: 0 360 0;
                      loop: true;
                      dur: 5000;
                      easing: linear;
           "
    >
    </a-box>

    <a-entity position="0 4 0"
              animation="property: rotation;
                      to: 0 -360 0;
                      loop: true;
                      dur: 5000;
                      easing: linear;
           "
    >
        <a-box color="#00AA00"
               position="2 0 0"
               animation="property: rotation;
                      to: 0 -360 0;
                      loop: true;
                      dur: 5000;
                      easing: linear;
           "
        ></a-box>
    </a-entity>
    
</a-scene>
```

![s4-c15-1.png](renders%2Fs4-c15-1.png)


[`animation`](https://aframe.io/docs/1.6.0/components/animation.html)

```html
    <a-box color="#FFAA00"
           position="0 0.5 0"
           animation="property: position;
                      from: -2 0.5 -2;
                      to: -2 0.5 2;
                      loop: true;
                      dir: alternate;
                      dur: 3000;
                      easing: linear;
           "
    >
    </a-box>
```

![s4-c15-2.png](renders%2Fs4-c15-2.png)


````html
    <!--  Scaling Box  -->
    <a-box color="#FFAA00"
           position="2 0.5 0"
           animation="property: scale;
                      to: 0.2 1 5;
                      loop: true;
                      dir: alternate;
                      dur: 3000;
                      easing: easeOutElastic;
           "
    >
````

![s4-c15-3.png](renders%2Fs4-c15-3.png)

```html
    <a-sphere color="#0000AA"
              radius="0.5"
              position="0 2.25 0"
              animation="property: material.color;
                         from: #00AAFF;
                         to: #0000AA;
                         loop: true;
                         dir: alternate;
                         dur: 1000;
                         easing: linear;
           "
    >
    </a-sphere>
```

![s4-c15-4.png](renders%2Fs4-c15-4.png)

```html
    <a-cone color="#484848"
            position="0 0.5 0"
            animation="property: material.opacity;
                       from: 1;
                       to: 0;
                       loop: true;
                       dir: alternate;
                       dur: 1500;
                       easing: linear;
           "
    ></a-cone>
```

![s4-c15-5.png](renders%2Fs4-c15-5.png)


#### 16. Adding light and shadows
...WIP


#### 17. `A-Frame` Inspector
[docs](https://aframe.io/docs/1.6.0/introduction/visual-inspector-and-dev-tools.html)

Mac, open inspector with:
`ctrl` + `option` + `i`

![s4-c17-1.png](renders%2Fs4-c17-1.png)

and after modifying the entity, you can copy and paste the modified values: 

```html
<a-sphere color="#0000AA" 
          radius="0.5" 
          position="-0.16207 1.28463 0" 
          animation="dir: alternate; easing: linear; from: #00AAFF; loop: true; property: material.color; to: #0000AA" 
          material="color: rgba(0,139,239,1)" 
          scale="1.14681 2.17624 -1.77865"
></a-sphere>
```

![s4-c17-2.png](renders%2Fs4-c17-2.png)


### Section 5: Interacting with the Objects
#### 18. Cursor primitive component

To create basic interactivity we can use the cursor primitive:

```html
    <a-camera>
        <a-cursor></a-cursor>
    </a-camera>
```

![s5-c18-1.png](renders%2Fs5-c18-1.png)

Custom cursor:

```html
    <a-camera>
        <a-entity cursor
                  position="0 0 -1"
                  geometry="primitive: sphere;
                            radius: 0.005;"
                  material="color: #000000;
                            shader: flat;
                            opacity: 0.5;"
        ></a-entity>
    </a-camera>

    <a-box color="#AA0000" position="-2 0 -7"></a-box>
    <a-box color="#AA0000" position=" 0 0 -7"></a-box>
    <a-box color="#AA0000" position=" 2 0 -7"></a-box>
```

![s5-c18-2.png](renders%2Fs5-c18-2.png)

#### 19. Event-Set Component

[`aframe-event-set-component`](https://www.npmjs.com/package/aframe-event-set-component) is an 
A-Frame component to register event listeners that set properties:

```bash
npm i aframe-event-set-component
```
>@NOTE: At the moment of this writing [5.0.0](https://www.npmjs.com/package/aframe-event-set-component/v/5.0.0) is the best option since 5.1.0 is failing.

```javascript
import 'aframe';
import 'aframe-event-set-component';
```

##### `_event` property

```html
    <a-box id="left-red"
           color="#AA0000"
           position="-2 0 -7"
           event-set__enter="_event: mouseenter; material.color: #FF0000"
    ></a-box>
```
![s5-c19-1.png](renders%2Fs5-c19-1.png)

Here we are using the `__event-set__[placeholder]` component, 
that use the `_event:` property to listen for  `mouseenter` synthetic event to
change the `material.color` to brighter red.

![s5-c19-2.png](renders%2Fs5-c19-2.png)

```html
    <a-box id="left-red"
           color="#AA0000"
           position="-2 0 -7"
           event-set__enter="_event: mouseenter; material.color: #FF0000"
           event-set__leave="_event: mouseleave; material.color: #AA0000"
    ></a-box>
```

##### `_target` property

Which can help us to change a property of another entity:

![s5-c19-3.png](renders%2Fs5-c19-3.png)

```html
    <a-box id="green"
           color="#00AA00"
           position="-2 3 -7"
           event-set__click="_event: click; material.color: #00AA00"
></a-box>
...
    <a-box id="left-red"
           color="#AA0000"
           position="-2 0 -7"
           event-set__enter="_event: mouseenter; material.color: #FF0000"
           event-set__leave="_event: mouseleave; material.color: #AA0000"
           event-set__tarcol="_event: click; _target: #green; material.color: #00AAFF"
    ></a-box>
```

![s5-c19-4.png](renders%2Fs5-c19-4.png)


#### 20. Gaze-based Interactions
