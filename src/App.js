import LandingPage from './Pages/LandingPage';
import PropertyPage from './Pages/PropertyPage';
import PropertyDetails from './Pages/PropertyDetails';
import AddProperty from './Pages/AddProperty';
import EditProperty from './Pages/EditProperty';
import DeleteProperty from './Components/DeleteProperty';
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
     
      {
        path: "/propertydetails/:id",
        element:<PropertyDetails />,
    
      },
      {
        path: "/addproperty",
        element:<AddProperty />,
      },
      {path:"/editproperty/:id",element:<EditProperty/>}
      , { path:'deleteproperty/:id', element:<DeleteProperty/>}
    ]);
  
const App = () => <RouterProvider router={router} />;


export default App;
