# a-frame-udemy
https://jc-lg.github.io/a-frame-udemy/

## Useful links
- https://aframe.io
- https://aframe.io/docs/1.6.0/components/geometry.html

## Coordinates

![info-1.png](renders%2Finfo-1.png)

![info-2.png](renders%2Finfo-2.png)

## Renders

### Section 3:
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

