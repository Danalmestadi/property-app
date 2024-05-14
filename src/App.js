import LandingPage from './Pages/LandingPage';
import PropertyPage from './Pages/PropertyPage';
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
      { path: "*", element: <h1>Not Found</h1> },
    ]);
  
const App = () => <RouterProvider router={router} />;


export default App;
