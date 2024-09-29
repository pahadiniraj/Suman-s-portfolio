import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./state/store.js";
import Blog from "./components/Blog.jsx";
import MainContainer from "./components/MainContainer.jsx";
import PostView from "./components/PostView.jsx";
import BlogHome from "./components/BlogHome.jsx";
import Login from "./components/management/Login.jsx";
import PortfolioManagement from "./components/management/PortfolioManagement.jsx";
import Dashboard from "./components/management/Dashboard.jsx";
import HomeManagement from "./components/management/HomeManagement.jsx";
import AboutManagement from "./components/management/AboutManagement.jsx";
import ResumeManagement from "./components/management/ResumeManagement.jsx";
import ContactManagement from "./components/management/ContactManagement.jsx";
import InfoManagement from "./components/management/InfoManagement.jsx";
import BlogManagement from "./components/management/BlogManagement.jsx";
import Messages from "./components/management/Messages.jsx";
import Reports from "./components/management/Reports.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>I caught the error. :D</p>,
    children: [
      {
        index: true,
        element: <Navigate to="main" replace />,
      },
      {
        path: "/main",
        element: <MainContainer />,
      },
      {
        path: "/blog-home",
        element: <BlogHome />,
        children: [
          {
            index: true,
            element: <Navigate to={`/blog-home/blog/all`} replace />,
          },
          {
            path: "/blog-home/blog/:category",
            element: <Blog />,
          },
          {
            path: "/blog-home/post/:postId",
            element: <PostView />,
          },
        ],
      },
    ],
  },
  {
    path: "/portfolio-management",
    element: <Login />,
  },
  {
    path: "/portfolio-management/management",
    element: <PortfolioManagement />,
    children: [
      {
        index: true,
        element: <Navigate to={`/portfolio-management/management/dashboard`} replace />,
      },
      {
        path: "/portfolio-management/management/dashboard",
        element: <Dashboard/>,
      },
      {
        path: "/portfolio-management/management/info",
        element: <InfoManagement/>,
      },
      {
        path: "/portfolio-management/management/home",
        element: <HomeManagement/>,
      },
      {
        path: "/portfolio-management/management/about",
        element: <AboutManagement/>,
      },
      {
        path: "/portfolio-management/management/resume",
        element: <ResumeManagement/>,
      },
      {
        path: "/portfolio-management/management/contact",
        element: <ContactManagement/>,
      },
      {
        path: "/portfolio-management/management/blog",
        element: <BlogManagement/>,
      },
      {
        path: "/portfolio-management/management/messages",
        element: <Messages/>,
      },
      {
        path: "/portfolio-management/management/reports",
        element: <Reports/>,
      },
    ]
  },
  {
    path: "/test",
    element: <BlogManagement/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
