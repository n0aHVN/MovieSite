import AppLayout from '../layouts/AppLayout';
import Home from '../pages/Home';

const router = [
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { index: true, element: <Home /> },
        ]
    }
];

export { router as HomeRoutes };