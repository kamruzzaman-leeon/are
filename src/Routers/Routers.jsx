
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import TeacherSearch from '../Pages/TeacherSearch/TeacherSearch';

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
          path:"/teacher-search",
          element:<TeacherSearch></TeacherSearch>
        }
      ]
    },
    {
        path:"*",
        element:<ErrorPage></ErrorPage>,
    }
  ]);

export default Routers;