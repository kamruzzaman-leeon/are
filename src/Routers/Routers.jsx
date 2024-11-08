
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Search from '../Pages/Search/Search';
import FindTeacher from '../Pages/FindTeacher/FindTeacher';
import FindStudent from '../Pages/FindStudent/FindStudent';
import Registration from '../Credential/Registration';
import Login from "../Credential/Login";
import Signout from '../Credential/Signout';
import PrivateRoute from './PrivateRoute';
import Profile from '../Pages/Profile/Profile';
import Settings from '../Pages/Settings/Settings';
import JoinTeacher from '../Pages/JoinTeacher/JoinTeacher';



const Routers = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path:"search/:role",
          element:<Search></Search>,
        },
        {
          path:"find_teacher",
          element:<FindTeacher></FindTeacher>,
        },
        {
          path:"find_student",
          element:<FindStudent></FindStudent>,
        },
        {
          path:"login",
          element:<Login></Login>,
        },
        {
          path:"registration",
          element:<Registration></Registration>
        },
        {
          path:"logout",
          element:<Signout></Signout>
        },
        
        {
          path:"profile",
          element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
          path:"jointeacher",
          element:<JoinTeacher></JoinTeacher>
        },
        {
          path:"settings",
          element:<PrivateRoute><Settings></Settings></PrivateRoute>
        }
      ]
    },
   
    {
        path:"*",
        element:<ErrorPage></ErrorPage>,
    }
  ]);

export default Routers;