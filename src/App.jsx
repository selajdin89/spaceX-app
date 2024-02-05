import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import Rockets, { rocketsLoader } from './pages/rockets/Rockets';

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
          loader: rocketsLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
