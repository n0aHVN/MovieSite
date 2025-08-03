import {Navbar} from './index'

export default function HeaderNavbar(){
    return (
        <Navbar>
            <div className='flex space-x-4 items-center justify-between'>
                <Navbar.NavItem id="home" link="/">Home</Navbar.NavItem>
                <Navbar.NavItem id="movies" link="/movies">Movies</Navbar.NavItem>
                <Navbar.NavItem id="series" link="/series">Series</Navbar.NavItem>
            </div>
        </Navbar>
    )
}