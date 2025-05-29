import Home from "../Components/Home.jsx";
import About from "../Components/About.jsx";
import DashBoard from "../Components/DashBoard.jsx";
import Navbar from "../Components/Navbar.jsx";
import Courses from "../Components/Courses.jsx";
import Blog from "../Components/Blog.jsx";
import Texts from "../Components/Texts.jsx";
import NotFound from "../Components/NotFound.jsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    { path: "/", element: <>
            <Navbar/>
            <Home/>
        </>
    },
    { path: "about", element: <>
            <Navbar/>
            <About/>
        </>
    },
    { path: "/dashboard", element: <>
            <Navbar/>
            <DashBoard/>
        </>,
        children: [
            { path: "Courses", element: <Courses/> },
            { path: "Blog",    element: <Blog/>    },
            { path: "Texts",   element: <Texts/>   }
        ]
    },
    { path: "*", element: <NotFound/> }
]);

export default router;