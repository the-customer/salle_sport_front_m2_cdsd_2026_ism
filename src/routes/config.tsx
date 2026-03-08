import type { RouteObject } from "react-router-dom";
import { lazy } from "react";

const MainLayout = lazy(() => import("../pages/main-layout/page"));
const DashboardPage = lazy(() => import("../pages/dashboard/page"));
const FirstConnectionPage = lazy(() => import("../pages/first-connection/page"));
const HomePage = lazy(() => import("../pages/home/page"));
const UsersPage = lazy(() => import("../pages/users/page"));
const LoginPage = lazy(() => import("../pages/login/page"));
const NotFound = lazy(() => import("../pages/NotFound"));


const routes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/layout',
        element: <MainLayout />,
    },
    {
        path: '/login',
        element: <LoginPage />
    },
    {
        path: '/dashboard',
        element: <DashboardPage />
    },
    {
        path: '/first-connection',
        element: <FirstConnectionPage />
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

