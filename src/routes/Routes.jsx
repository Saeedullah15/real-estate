import {
    createBrowserRouter
} from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import EstateDetails from "../pages/EstateDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/estates.json"),
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/estateDetails/:id",
                element: <PrivateRoute><EstateDetails></EstateDetails></PrivateRoute>,
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            },
            {
                path: "/updateProfile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            }
        ]
    },
]);

export default routes;