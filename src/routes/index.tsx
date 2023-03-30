import { ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import NationalityPage from "../pages/nationality";
import UsersPage from "../pages/users";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  { path: "/users/:nationality", element: <NationalityPage /> },
] as Parameters<typeof createBrowserRouter>[0];
