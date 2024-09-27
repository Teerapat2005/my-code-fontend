import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Home";
import Input_peple from "./Personal/Input_peple";
import Output_people from "./Personal/Output_people";
import Contractor_cost from "./Cost/Contractor_cost";
import Operation from "./Cost/Operation";
import Piecework from "./Cost/Piecework";
import Form1 from "./pages/UserManpower/Form1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Input", // This path should match the one in the Link component
    element: <Input_peple />,
  },
  {
    path: "/Quit",
    element: <Output_people />,
  },
  {
    path: "/Cost",
    element: <Contractor_cost />,
  },
  {
    path: "/Opr",
    element: <Operation/>
  },
  {
    path: "/Pw",
    element: <Piecework/>
  },
  {
    path: "/manpower",
    element: <Form1/>
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
