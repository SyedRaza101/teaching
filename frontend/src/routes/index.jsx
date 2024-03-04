import { useRoutes } from "react-router-dom";
import PublicRoute from "./public-route";
import { AuthLayout, MainLayout } from "../layouts";
import { About, Contact, Course, Login, Register, SingleCourse } from "../pages";

export default function Routes() {
  return useRoutes([
    {
      path: "/login",
      element: <PublicRoute Component={AuthLayout} />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
    {
      path: "/register",
      element: <PublicRoute Component={AuthLayout} />,
      children: [
        {
          path: "student",
          element: <Register />,
        },
        {
          path: "teacher",
          element: <Register isTeacher />,
        },
      ],
    },
    {
      path: "/",
      element: <PublicRoute Component={MainLayout} />,
      children: [
        {
          index: true,
          element: <Course />,
        },
        { path: "course/:id", element: <SingleCourse /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);
}
