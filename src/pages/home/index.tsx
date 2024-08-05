import { useLocation } from "react-router-dom";

const Home = () => {
  const route = useLocation();

  console.log(route?.state?.params?.username);

  return <div>Home</div>;
};

export default Home;
