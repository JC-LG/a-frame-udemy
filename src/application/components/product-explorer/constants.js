const DEFAULT_3D_POINT = { x: 0, y: 0 , z: 0 };

export const DEFAULT = {
    POSITION: DEFAULT_3D_POINT,
    ROTATION: DEFAULT_3D_POINT,
    SCALE: { x: 1, y: 1, z: 1 }
}

export const format3DPoint = ({ x, y, z} = DEFAULT_3D_POINT) => {
    return `${x} ${y} ${z}`;
}
