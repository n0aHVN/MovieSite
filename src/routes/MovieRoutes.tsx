import AppLayout from "@/layouts/AppLayout";
import Movie from "@/pages/Movie";
import { MovieDetail } from "@/pages/MovieDetail";

const router = [
    {
        path: '/movies',
        element: <AppLayout/>,
        children: [
            {index: true, element: <Movie />},
        ]
    },
    {
        path: '/movie/:id',
        element: <AppLayout/>,
        children: [
            {index: true, element: <MovieDetail />}
        ]
    }
]

export { router as MovieRoutes };
