import {createBrowserRouter} from "react-router-dom";
import Init from "@/pages/init";
import NotFound from "@/pages/notFound";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Init/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
]);

export default router;