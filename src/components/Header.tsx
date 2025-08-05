import { Link } from "react-router-dom"; // Changed from "react-router"
import logoPath from "../../public/logo.png";
import HeaderNavbar from "./Navbar/HeaderNavbar";
export default function Header() {
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex flex-row items-center justify-between">
                {/* Logo Section */}
                <Link to="/" className="flex space-x-2 items-center justify-between">
                    <img className="w-8 invert" src={logoPath} alt="Logo" />
                    <p><strong>MovieSite</strong></p>
                </Link>
                {/* Navigation Section */}
                <HeaderNavbar/>

            </div>
        </header>
    );
}