import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./Pages/Home";
import ViewBook from "./Pages/ViewBook";
import CreateBook from "./Pages/CreateBook";
import EditBook from "./Pages/EditBook";
import BooksPage from "./Pages/BooksPage";
import NotFound from "./Pages/NotFound";

const abcBookRouter = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/viewbook", element: <ViewBook />},
  {path: "/createbook", element: <CreateBook />},
  {path: "/editbook", element: <EditBook />},
  {path: "/bookspage", element: <BooksPage />},
  {path: "*", element: <NotFound />},

]);
 function App() {
  return (
    <>
      <RouterProvider router={abcBookRouter} />
    </>
  )
}
export default App


