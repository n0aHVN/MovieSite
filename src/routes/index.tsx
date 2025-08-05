import { HomeRoutes } from "./HomeRoutes";
import { MovieRoutes } from "./MovieRoutes";
import { TVSeriesRoutes } from "./TVSeriesRoutes";

export const appRoutes = [
    ...HomeRoutes,
    ...MovieRoutes,
    ...TVSeriesRoutes
]