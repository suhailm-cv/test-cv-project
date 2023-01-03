import { createBrowserRouter } from "react-router-dom";
import App  from "./App";
import Create from "./Post/Create";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/create",
    element: <Create/>,
  }
])

export default Router;
