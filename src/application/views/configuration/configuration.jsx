import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';

import { ROUTES } from '../../../router/router';
import { PRODUCT_SETTINGS, COLORS, STORAGE_OPTIONS, IMAGE } from '../../constants';

import ProductExplorer from '../../components/product-explorer/product-explorer';
import Error from '../../components/error/error';
import ColorPicker from '../../components/color-picker/color-picker';
import StorageSelector from '../../components/storage-selector/storage-selector';

const Configuration = () => {

    const navigate = useNavigate();
    const { productId  } = useParams();

    const goToStore = useCallback(() => {
            navigate(ROUTES.STORE.PATH);
    }, [navigate]);

    // For debugging from global scope
    window.goToStore = goToStore;

    const productSettings = PRODUCT_SETTINGS[productId];

    return productSettings ? (
        <>
            <a-sky src={`#${IMAGE.ARCH.ID}`}
                   radius="500"
                   position="0 0 0"
                   rotation="0 -90 -30"
            />
            <ProductExplorer modelId={productId}
                             scale={productSettings.SCALE}
                             position={productSettings.POSITION}
                             rotation={productSettings.ROTATION}
            />
            <ColorPicker colors={COLORS}/>
            <StorageSelector options={STORAGE_OPTIONS}/>
        </>
    ) : <Error text={`Incorrect product id: ${productId}`} />;
};

export default Configuration;