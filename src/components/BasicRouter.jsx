import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Home Page</h1>,
        errorElement: <h1>Not Found</h1>
    },
    {
        path: "/about",
        element: <h2>  About Page </h2>
    },
    {
        path: "/contact",
        element: <h2>Contact Page</h2>
    }

])
const BasicRouter  = () => {
    return <RouterProvider router={router} />
}
export default BasicRouter;