import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar';
import Rockets from './pages/rockets/Rockets';

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
