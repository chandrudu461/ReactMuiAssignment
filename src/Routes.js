import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import TestElement from './pages/TestElement';
import LoginPage from './pages/LoginPage'
import ErrorPage from './components/common/ErrorPage';
import DashboardPage from './pages/DashboardPage';
import CoursePage from './pages/CoursePage';
import PdfPage from './pages/PdfPage';
// import withSidebarAndHeader from './components/HOC/withSideBarAndHeader';
// const SidebarAndHeaderComponent = withSidebarAndHeader

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: <ErrorPage />,
  },
  { path: "/course/:courseId", element: <CoursePage /> },
  { path: "/test", element: <TestElement /> },
  {
    path: "/pdfview/:url",
    element: <PdfPage />,
    errorElement: <ErrorPage />,
  },
  { path: "*", element: <ErrorPage /> },
  // {
  //   path: "/",
  //   element: <Layout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     { path: "dashboard", element: <DashboardPage /> },
  //     { path: "test", element: <TestElement /> },
  //     { path: "/course/:courseId", element: <CoursePage /> },
  //     {
  //       path: "/pdfview/:url",
  //       element: <PdfViewer />,
  //       errorElement: <ErrorPage />,
  //     },
  //   ],
  // },
])

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRouter;