import Navbar from "./Navbar";
import NavItem from "./NavItem";

type CompoundNavbar = typeof Navbar & {
    NavItem: typeof NavItem;
}

const Compound: CompoundNavbar = Object.assign(Navbar,{
    NavItem
});

export {Compound as Navbar};