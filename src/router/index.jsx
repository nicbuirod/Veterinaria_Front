import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Login,
  OwnersRegister,
  Owners,
  Pets,
  PetsRegister,
  Users,
  ConsultationNew,
  FollowPet,
  Vacunacion,
  Desparasitacion,
  WaitingRoom,
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
    path: "/new-consultation",
    element: <ConsultationNew />,
  },
  {
    path: "/follow",
    element: <FollowPet />,
  },
  {
    path: "/vacunacion",
    element: <Vacunacion />,
  },
  {
    path: "/desparasitacion",
    element: <Desparasitacion />,
  },
  {
    path: "/waitingroom",
    element: <WaitingRoom />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
