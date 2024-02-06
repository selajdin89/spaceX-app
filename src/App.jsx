import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import Rockets from './pages/rockets/Rockets';
<<<<<<< HEAD
import Dragons from './pages/dragons/Dragons';
=======
import Missions from './pages/missions/Missions';
import MyProfile from './pages/myProfile/MyProfile';
>>>>>>> f0fa4929e21d782118278104126d551815cd7b7c

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
<<<<<<< HEAD
          path: '/dragons',
          element: <Dragons />,
=======
          path: '/missions',
          element: <Missions />,
        },
        {
          path: '/my-profile',
          element: <MyProfile />,
>>>>>>> f0fa4929e21d782118278104126d551815cd7b7c
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
