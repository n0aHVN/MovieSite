import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home';

const router = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { index: true, element: <Home /> },
            { 
                path: 'movies', 
                element: <div className="text-center"><h1 className="text-3xl font-bold">Movies Page</h1></div> 
            },
            { 
                path: 'series', 
                element: <div className="text-center"><h1 className="text-3xl font-bold">TV Series Page</h1></div> 
            }
        ]
    }
];

export { router as HomeRoutes };