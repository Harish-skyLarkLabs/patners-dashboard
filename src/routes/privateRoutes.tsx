import { Navigate } from "react-router-dom";
import { routes } from "./index.tsx";
import DashboardBaseLayout from "../layout/DashboardBaseLayout.tsx";
import React from "react";

export interface PrivateRouteProps {
  showSideDrawer?: boolean;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ showSideDrawer = true, children }) => {
  // const { isAuthenticated } = useAppSelector((state) => state.auth);
  const isAuthenticated = true

  if (!isAuthenticated) return <Navigate to={routes.login.path} />;
//   if (!showSideDrawer) return <NoSidebarDashboardBaseLayout>{children}</NoSidebarDashboardBaseLayout>;
  return <DashboardBaseLayout>{children}</DashboardBaseLayout>;
};

export default PrivateRoute;
