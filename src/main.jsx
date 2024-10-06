import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
        } from "react-router-dom";
import "./index.css";

import App from "./App";
import Quiz from "./pages/Quiz";
import Info from "./pages/Info";
import Level1 from "./pages/quizes/level1";
import Level2 from "./pages/quizes/level2";
import Level3 from "./pages/quizes/level3";
import Level4 from "./pages/quizes/level4";
import Level5 from "./pages/quizes/level5";
import Level6 from "./pages/quizes/level6";
import Level7 from "./pages/quizes/level7";
import Level8 from "./pages/quizes/level8";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Quiz",
    element: <Quiz/>,
  },
  {
    path: "/Info",
    element: <Info/>,
  },
  {
    path: "/Quiz/Level1",
    element: <Level1/>,
  },
  {
    path: "/Quiz/Level2",
    element: <Level2/>,
  },
  {
    path: "/Quiz/Level3",
    element: <Level3/>,
  },
  {
    path: "/Quiz/Level4",
    element: <Level4/>,
  },
  {
    path: "/Quiz/Level5",
    element: <Level5/>,
  },
  {
    path: "/Quiz/Level6",
    element: <Level6/>,
  },
  {
    path: "/Quiz/Level7",
    element: <Level7/>,
  },
  {
    path: "/Quiz/Level8",
    element: <Level8/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
