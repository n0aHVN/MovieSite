import { createContext, useState, type ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface NavContextType{
    activeId: string;
    setActiveId: (id: string) => void;
}
export const NavContext = createContext<NavContextType|null>(null);

interface NavbarProps{
    children: ReactNode;
}

export default function Navbar({children}: NavbarProps){
    const location = useLocation();
    const [activeId, setActiveId] = useState("home");

    // Update activeId based on the current path
    // This ensures that the active item reflects the current route if the user navigates directly
    // or refreshes the page.
    useEffect(() => {
        const pathToId: Record<string, string> = {
            "/": "home",
            "/movies": "movies",
            "/series": "series"
        };
        setActiveId(pathToId[location.pathname] || "home");
    }, [location.pathname]);

    return (
        <NavContext.Provider value={{activeId, setActiveId}}>
            {children}
        </NavContext.Provider>
    )
}