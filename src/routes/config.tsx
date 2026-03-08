import type { RouteObject } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/home/page"));
const UsersPage = lazy(() => import("../pages/users/page"));
const LoginPage = lazy(() => import("../pages/login/page"));
const NotFound = lazy(() => import("../pages/NotFound"));


const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/users',
        element: <UsersPage />
    },
    {
        path: '*',
        element: <NotFound />
    }
];

export default routes;

