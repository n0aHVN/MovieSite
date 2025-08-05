import AppLayout from "@/layouts/AppLayout";
import TVSeriesPage from "@/pages/TVSeries";

const router = [
    {
        path: '/series',
        element: <AppLayout/>,
        children: [
            {index: true, element: <TVSeriesPage/>},
        ]
    }
]

export { router as TVSeriesRoutes };
