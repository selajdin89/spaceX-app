import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import Rockets from './pages/rockets/Rockets';
<<<<<<< HEAD
import Dragons from './pages/dragons/Dragons';
=======
>>>>>>> f948a04cea648b203832e7271037e428e66f2c66
import Missions from './pages/missions/Missions';
import MyProfile from './pages/myProfile/MyProfile';

function App() {
  const Layout = () => {
    return (
      <div className='app'>
        <Navbar />
        <Outlet />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Rockets />,
        },
        {
          path: '/missions',
          element: <Missions />,
<<<<<<< HEAD
        },  
        {
          path: '/dragons',
          element: <Dragons />,
=======
>>>>>>> f948a04cea648b203832e7271037e428e66f2c66
        },
        {
          path: '/my-profile',
          element: <MyProfile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
