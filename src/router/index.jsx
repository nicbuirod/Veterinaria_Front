import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Login,
  OwnersRegister,
  Owners,
  Pets,
  PetsRegister,
  Users,
  Vacunacion,
  Desparasitacion,
} from "../pages";

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
  {
    path: "/vacunacion",
    element: <Vacunacion />,
  },
  {
    path: "/desparasitacion",
    element: <Desparasitacion />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
