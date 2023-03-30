import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { IconContext } from "react-icons";
import { routes } from "./routes";
import './styles/styles.css'

const router = createBrowserRouter(routes);

function App() {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <RouterProvider router={router}></RouterProvider>
    </IconContext.Provider>
  );
}

export default App;
