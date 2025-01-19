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

