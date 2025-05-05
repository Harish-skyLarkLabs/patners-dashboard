import { useNavigate } from "react-router-dom";

export const useHandleRouteClick = () => {
  const navigate = useNavigate();
  const handleRouteClick = (route: string, data?: object) => {
    navigate(route, { state: data });
  };
  return handleRouteClick;
};
