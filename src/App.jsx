import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./components/Home";
import ViewBooks from "./components/ViewBooks";
import CreateBook from "./components/CreateBook";
import EditBook from "./components/EditBook";
import BooksPage from "./Pages/BooksPage";
import NotFound from "./components/NotFound";

const abcBookRouter = createBrowserRouter([
  {path: "/", element: <Home />},
  {path: "/viewbooks", element: <ViewBooks />},
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


