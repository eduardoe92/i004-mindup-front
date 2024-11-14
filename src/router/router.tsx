import App from '../App'
import RegisterForm from '../pages/RegisterForm';
import Onboarding from '../pages/Onboarding';

import { createBrowserRouter } from 'react-router-dom';
import LoginForm from '../pages/LoginForm';
import Profile from '../pages/profile';
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "register", element: <RegisterForm /> },
        { path: "", element: <LoginForm /> },
        { path: "onboard", element: <Onboarding /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ]);