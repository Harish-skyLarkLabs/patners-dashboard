import React from 'react';
import Login from '../pages/auth/Login.tsx';
import Dashboard from '../pages/dashboard/index.tsx';
import Explore from '../pages/explore/index.tsx';
import Settings from '../pages/settings/index.tsx';

import { LoginOutlined } from '@mui/icons-material';
import { Dashboard as DashboardIcon, Explore as ExploreIcon, Settings as SettingsIcon } from '@mui/icons-material';
import Tire from '../pages/explore/tire/index.tsx';
import SubBundles from '../pages/explore/sub-bundles/index.tsx';
import Cart from '../pages/cart/index.tsx';
import Wishlist from '../pages/wishlist/index.tsx';
// import SignUp from '../pages/auth/components/SignUp.tsx';
import SignUpPage from '../pages/auth/signup/index.tsx';

export interface HeaderIconProps {
    profile?: boolean;
}

export interface RoutesInterface {
    path: string;
    title: string;
    icon: React.ReactNode | null;
    isLoginRequired: boolean;
    page: React.ReactNode;
    isHiddenOnSideDrawer: boolean;
    isAdditional: boolean;
    showSideDrawer?: boolean;
}

export const routes: Record<string, RoutesInterface> = {
    login: {
        path: "/",
        title: "Login",
        icon: <LoginOutlined />,
        isLoginRequired: false,
        page: <Login />,
        isAdditional: false,
        isHiddenOnSideDrawer: true,
    },
    signUp: {
        path: "/sign-up",
        title: "SignUp",
        icon: <LoginOutlined />,
        isLoginRequired: false,
        page: <SignUpPage />,
        isAdditional: false,
        isHiddenOnSideDrawer: true,
    },
    dashboard: {
        path: "/dashboard",
        title: "Dashboard",
        icon: <DashboardIcon />,
        isLoginRequired: true,
        page: <Dashboard />,
        isAdditional: false,
        isHiddenOnSideDrawer: false,
    },
    explore: {
        path: "/explore",
        title: "Explore",
        icon: <ExploreIcon />,
        isLoginRequired: true,
        page: <Explore />,
        isAdditional: false,
        isHiddenOnSideDrawer: false,
    },
    subBundles: {
        path: "/bundles/:bundleId",
        title: "Bundle Details",
        icon: <ExploreIcon />,
        isLoginRequired: true,
        page: <SubBundles />,
        isAdditional: false,
        isHiddenOnSideDrawer: false,
    },
    tire: {
        path: "/bundles/:bundleId/:subBundleId",
        title: "Tier Comparison",
        icon: <ExploreIcon />,
        isLoginRequired: true,
        page: <Tire />,
        isAdditional: false,
        isHiddenOnSideDrawer: false,
    },
    settings: {
        path: "/settings",
        title: "Settings",
        icon: <SettingsIcon />,
        isLoginRequired: true,
        page: <Settings />,
        isAdditional: false,
        isHiddenOnSideDrawer: false,
    },
    cart: {
        path: "/cart",
        title: "Cart",
        icon: <SettingsIcon />,
        isLoginRequired: true,
        page: <Cart />,
        isAdditional: false,
        isHiddenOnSideDrawer: false,
    },
    wishlist: {
        path: "/wishlist",
        title: "Wishlist",
        icon: <SettingsIcon />,
        isLoginRequired: true,
        page: <Wishlist />,
        isAdditional: false,
        isHiddenOnSideDrawer: false,
    },
};

export const routesArr: [string, RoutesInterface][] = Object.entries(routes);

export default routes;
