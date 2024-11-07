
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Search from '../Pages/Search/Search';
import FindTeacher from '../Pages/FindTeacher/FindTeacher';
import FindStudent from '../Pages/FindStudent/FindStudent';
import Registration from '../Credential/Registration';
import Login from "../Credential/Login";



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
          path:"profile",
          element:<div>profile</div>
        }
      ]
    },
    {
      path:"/login",
      element:<Login></Login>,
    },
    {
      path:"/registration",
      element:<Registration></Registration>
    }
    ,
    {
        path:"*",
        element:<ErrorPage></ErrorPage>,
    }
  ]);

export default Routers;