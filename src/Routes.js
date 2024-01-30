import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import TestElement from './pages/TestElement';
import LoginPage from './pages/LoginPage'
import Login from './components/common/Login';
import ErrorPage from './components/common/ErrorPage';
import Layout from './components/common/Layout'
import DashboardPage from './pages/DashboardPage';
import CoursePage from './pages/CoursePage';
import PdfViewer from './components/common/pdfViewer'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'test', element: <TestElement /> },
      { path: '/course/:courseId', element: <CoursePage /> }
    ]
  },
  {
    path: '/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/pdfview/:url',
    element: <PdfViewer />,
    errorElement: <ErrorPage />
  }
])

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRouter;