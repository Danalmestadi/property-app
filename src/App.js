import LandingPage from './Pages/LandingPage';
import PropertyPage from './Pages/PropertyPage';
import PropertyDetails from './Pages/PropertyDetails';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


    const router = createBrowserRouter([
      {
        path: "/",
        element:<LandingPage/>,
      },
      {
        path: "/property",
        element:<PropertyPage/>,
    
      },
      { path: "*", element: <h1>Page Not Found</h1> },
      {
        path: "/propertydetails/:id",
        element:<PropertyDetails />,
    
      },
    ]);
  
const App = () => <RouterProvider router={router} />;


export default App;
