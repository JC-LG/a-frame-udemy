import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import Store from '../application/views/store/store';
import Product from '../application/views/product/product';
import Configuration from '../application/views/configuration/configuration';

const ROUTES = {
    STORE: {
        URL: '/',
        PATH: '/'
    },
    PRODUCT: {
        URL: '/product/:productId',
        PATH: '/product',
        PARAMS: {
            PRODUCT_ID: 'productId'
        }
    },
    CONFIGURATION: {
        URL: '/configuration/:productId',
        PATH: '/configuration',
        PARAMS: {
            PRODUCT_ID: 'productId'
        }
    }
};

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.STORE.URL} element={<Store />} />
                <Route path={ROUTES.PRODUCT.URL} element={<Product />} />
                <Route path={ROUTES.CONFIGURATION.URL} element={<Configuration />} />
            </Routes>
        </BrowserRouter>
    )
};


export {
    Router,
    ROUTES
}