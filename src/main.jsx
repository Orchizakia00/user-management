import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import MainLayout from './layouts/MainLayout/MainLayout';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './providers/AuthProvider';
import { Toaster } from 'react-hot-toast';
import AddUser from './pages/AddUser/AddUser';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserDetails from './pages/UserDeatils/UserDetails';
import EditUser from './pages/EditUser/EditUser';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/user-details/:email',
        element: <UserDetails></UserDetails>,
        loader: ({params}) => fetch(`https://user-management-server-kohl.vercel.app/logged-users/${params.email}`)
      },
      {
        path: '/add-user',
        element: <PrivateRoute><AddUser></AddUser></PrivateRoute>
      },
      {
        path: '/edit-user/:email',
        element: <EditUser></EditUser>,
        loader: ({params}) => fetch(`https://user-management-server-kohl.vercel.app/logged-users/${params.email}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
