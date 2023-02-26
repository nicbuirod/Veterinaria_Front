import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Login, OwnersRegister, Pets, PetsRegister, Users } from "../pages";


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

    path: "/owners-register",
    element: <OwnersRegister />,

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
