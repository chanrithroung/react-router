import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom"
import {Layout, Error ,Home, Contact, About, Users } from "./index.js"
import { userLoader } from "./user/Users.jsx";
import UserLayout from "./user/UserLayout.jsx";
import UserDetail, { userDetailLoader } from "./user/UserDetail.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />,
                children: [
                    {
                        index: true,
                        element: <h1>Mission....</h1>
                    },
                    {
                        path: "version",
                        element: <h1>Version....</h1>
                    },
                    {
                        path: "goal",
                        element: <h1>Goal....</h1>
                    }
                ]
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "users",
                element: <UserLayout />,
                children: [
                    {
                        index: true,
                        element: <Users />,
                        loader: userLoader,
                    },
                    {
                        path: ":id",
                        element: <UserDetail />,
                        loader: userDetailLoader,
                    }
                ]
            }
        ]
    },
])


// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<Layout />} errorElement={<Error />}>
//             <Route index element={<Home />} />
//             <Route path="about" element={<About />}>
//                 <Route path="version" element={<h3> Version....</h3>} />
//                 <Route path="mission" element={<h3>Mission....</h3>} />
//                 <Route path="goal" element={<h3>Goal...</h3>} />
//             </Route>
//             <Route path="contact" element={<Contact />} />
//             {/* <Route path="users" element={<Users />} /> */}
//         </Route>
//     )
// );
const RouterWithComponent = () => <RouterProvider router={router} />
export default RouterWithComponent;