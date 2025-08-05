import React, { useContext, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { NavContext } from "./Navbar";

interface NavItemProps {
  children: ReactNode;
  id: string;
  link: string;
}

export default function NavItem({ children: title, id, link }: NavItemProps) {
  const context = useContext(NavContext);
  if (!context) throw new Error("NavItem must be used within Navbar");

  const { activeId } = context;
  const isActive = id === activeId;

  const hoverDivStyle = `
    relative inline-block group
    after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%]
    after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 after:ease-out
    ${
      isActive
        ? "after:w-full"
        : "after:w-0 group-hover:text-red-500 group-hover:after:w-full"
    }
    `;
    const textStyle = `px-2 py-1 hover:text-red-500 transition-colors duration-300 ease-in-out`;

  return (
    <Link to={link}>
      <div className={hoverDivStyle}>
        <p className={textStyle}>{title}</p>
      </div>
    </Link>
  );
}
