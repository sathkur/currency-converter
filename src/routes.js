import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";


    
const routes = [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '', element: <HomePage /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        // {
        //     path: 'my-account',
        //     element: <MyAccount/>,
        //     children: [
        //       { path: 'profile', element: <Profile /> },
        //     ]
        // },
        // { path: '*', element: <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." extra={<Button type="primary">Back Home</Button>}/> },

      ]
    },

]

export default routes;