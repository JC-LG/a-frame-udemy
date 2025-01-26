import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';

import ProductExplorer from '../../components/product-explorer/product-explorer';
import Error from '../../components/error/error.jsx';
import { ROUTES } from '../../../router/router';
import { IMAGE, PRODUCT_SETTINGS } from '../../constants';

const Product = () => {

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
            <a-sky src={`#${IMAGE.WAVE.ID}`}
                   radius="500"
                   position="0 0 0"
                   rotation="0 -90 -30"
            />
            <ProductExplorer modelId={productId}
                             scale={productSettings.SCALE}
                             position={productSettings.POSITION}
                             rotation={productSettings.ROTATION}
            />
        </>
    ) : <Error text={`Incorrect product id: ${productId}`}/>;
};

export default Product;