import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default Home;
