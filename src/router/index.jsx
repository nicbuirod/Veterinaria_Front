import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, Owners, Pets, PetsRegister, Users } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement: <div>Hubo un error!!</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/owners",
    element: <Owners />,
  },
  {
    path: "/pets-register",
    element: <PetsRegister />,
  },
  {
    path: "/pets",
    element: <Pets />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
