import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
    RouterProvider
} from "react-router-dom";
import './index.css';
import AuthProvider from './providers/AuthProvider';
import routes from './routes/Routes';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <AuthProvider>
                <RouterProvider router={routes} />
            </AuthProvider>
        </HelmetProvider>
    </React.StrictMode>,
)
