export const SCENE_ELEMENTS = {
    CAMERA_RIG: 'cameraRig',
    HEAD: 'head',
}

export const IMAGE = {
    SKY: {
        ID: 'sky',
        SRC: '/images/blue-sky.jpg'
    },
    YOSEMITE: {
        ID: 'yosemite',
        SRC: '/images/yosemite.jpg'
    },
    SPACE: {
        ID: 'space',
        SRC: '/images/space.jpg'
    },
    WAVE: {
        ID: 'wave',
        SRC: '/images/bg-1.png'
    },
    ARCH: {
        ID: 'arch',
        SRC: '/images/bg-3.png'
    },
};
export const IMAGES = Object.keys(IMAGE).map((key) => IMAGE[key]);

export const TEXTURE = {
    BRICK: {
        ID: 'brick',
        SRC: '/textures/TCom_Wall_Stone3_2x2_1K_albedo.jpeg'
    },
    GRASS: {
        ID: 'grass',
        SRC: '/textures/TCom_Ground_Grass03_header.jpg'
    }
};
export const TEXTURES = Object.keys(TEXTURE).map((key) => TEXTURE[key]);

export const NORMAL_MAP = {
    BRICK: {
        ID: 'brick-normal',
        SRC: '/textures/TCom_Wall_Stone3_2x2_1K_albedo_NormalMap.png'
    },
    GRASS: {
        ID: 'grass-normal',
        SRC: '/textures/TCom_Ground_Grass03_header_NormalMap.png'
    }
}
export const NORMAL_MAPS = Object.keys(NORMAL_MAP).map((key) => NORMAL_MAP[key]);

const MODEL_TYPE = {
    PRODUCT: 'product',
    STAGE: 'stage',
    ENVIRONMENT: 'environment'
};

export const MODEL = {
    // STORE: {
    //     ID: 'apple-store',
    //     SRC: './models/apple-immersive-store-legacy.glb'
    //     TYPE: MODEL_TYPE.STAGE
    // },
    STORE: {
        ID: 'apple-store',
        SRC: '/models/apple-store2.glb',
        TYPE: MODEL_TYPE.STAGE
    },
    VISION_PRO: {
        ID: 'apple-vision-pro',
        SRC: '/models/apple-vision-pro.glb',
        TYPE: MODEL_TYPE.PRODUCT
    },
    PENCIL_PRO: {
        ID: 'apple-pencil-pro',
        SRC: '/models/apple-pencil-pro.glb',
        TYPE: MODEL_TYPE.PRODUCT
    },
    WATCH: {
        ID: 'apple-watch',
        SRC: '/models/apple-watch.glb',
        TYPE: MODEL_TYPE.PRODUCT
    },
    IMAC_GREEN: {
        ID: 'imac-green',
        SRC: '/models/imac-green.glb',
        TYPE: MODEL_TYPE.PRODUCT
    },
    IMAC_YELLOW: {
        ID: 'imac-yellow',
        SRC: '/models/imac-yellow.glb',
        TYPE: MODEL_TYPE.PRODUCT
    },
    IPHONE_16_PRO: {
        ID: 'iphone-16-pro',
        SRC: '/models/iphone-16-pro.glb',
        TYPE: MODEL_TYPE.PRODUCT
    },
    MBP_BLACK: {
        ID: 'macbook-pro-black',
        SRC: '/models/macbook-pro-black.glb',
        TYPE: MODEL_TYPE.PRODUCT
    },
    MBP_SILVER: {
        ID: 'macbook-pro-silver',
        SRC: '/models/macbook-pro-silver.glb',
        TYPE: MODEL_TYPE.PRODUCT
    }
};

export const MODELS = Object.keys(MODEL).map((key) => MODEL[key]);
export const PRODUCT = ((productMap) => {
    Object.keys(MODEL).forEach((modelKey) => {
        const model = MODEL[modelKey];
        if (model.TYPE === MODEL_TYPE.PRODUCT) {
            productMap[modelKey] = model.ID;
        }
    })
    return productMap;
})({});

export const PRODUCT_SETTINGS = {
    [PRODUCT.VISION_PRO]: {
        SCALE: { x: 0.03, y: 0.03, z: 0.03 },
        POSITION: { y: 1.6, z: -1 }
    },
    [PRODUCT.PENCIL_PRO]: {
        SCALE: { x: 4, y: 4, z: 4 },
        POSITION: { y: 1.5, z: -1 }
    },
    [PRODUCT.WATCH]: {
        SCALE: { x: .001, y: .001, z: .001 },
        POSITION: { y: 1.6, z: -1 },
        ROTATION: { x: 70 }
    },
    [PRODUCT.IMAC_GREEN]: {
        SCALE: { x: 0.0001, y: 0.0001, z: 0.0001 },
        POSITION: { y: 1.5, z: -0.5 }
    },
    [PRODUCT.IMAC_YELLOW]: {
        SCALE: { x: 0.15, y: 0.15, z: 0.15 },
        POSITION: { y: 1.2, z: -1 },
        ROTATION: { y: 180 }
    },
    [PRODUCT.IPHONE_16_PRO]: {
        SCALE: { x: 4, y: 4, z: 4 },
        POSITION: { y: 1.4, z: -0.7 }
    },
    [PRODUCT.MBP_BLACK]: {
        SCALE: { x: 0.2, y: 0.2, z: 0.2 },
        POSITION: { x: 1.1, y: 1.3, z: -1 },
        ROTATION: { x: 30 }
    },
    [PRODUCT.MBP_SILVER]: {
        SCALE: { x: 0.2, y: 0.2, z: 0.2 },
        POSITION: { x: -0.2, y: 1.3, z: -1 },
        ROTATION: { x: 30 }
    },
};


export const COLOR = {
    SPACE_BLACK: {
        LABEL_CODE: '#FFFFFF',
        NAME: 'Space Black',
        CODE: '#2e2c2f',
        ID: 'space-black',
    },
    SILVER: {
        LABEL_CODE: '#000000',
        NAME: 'Silver',
        CODE: '#e3e4e6',
        ID: 'silver',
    }
};

export const COLORS = Object.keys(COLOR).map((key) => COLOR[key]);

export const STORAGE_OPTION = {
    GB_128: {
        ID: 'GB_128',
        NAME: '128 GB',
    },
    GB_256: {
        ID: 'GB_256',
        NAME: '256 GB',
    },
    GB_512: {
        ID: 'GB_512',
        NAME: '512 GB',
    },
    TB_1: {
        ID: 'TB_1',
        NAME: '1 TB',
    },
    TB_2: {
        ID: 'TB_2',
        NAME: '2 TB',
    },
};

export const STORAGE_OPTIONS = Object.keys(STORAGE_OPTION).map((key) => STORAGE_OPTION[key]);
