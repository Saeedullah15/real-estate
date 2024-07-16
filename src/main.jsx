import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import {
    RouterProvider
} from "react-router-dom";
import './index.css';
import AuthProvider from './providers/AuthProvider';
import routes from './routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <AuthProvider>
                <RouterProvider router={routes} />
            </AuthProvider>
        </HelmetProvider>
    </React.StrictMode>,
)
