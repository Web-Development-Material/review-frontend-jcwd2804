import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const goTo = (path: string, params?: any) =>
    navigate(path, {
      state: {
        params: params,
      },
    });
  const goBack = () => navigate(-1);

  return {
    goTo,
    goBack,
  };
};

export default useNavigation;
