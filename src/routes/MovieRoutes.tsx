import AppLayout from "@/layouts/AppLayout";
import Movie from "@/pages/Movie";

const router = [
    {
        path: '/movies',
        element: <AppLayout/>,
        children: [
            {index: true, element: <Movie />},
        ]
    }
]

export { router as MovieRoutes };
