import type { FC } from "react";
import { Link } from "react-router";

const LINKS = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
];

export const Navbar: FC = () => {
  // :::: return JSX ::::
  return (
    <nav className="flex items-center gap-x-6">
      {LINKS.map((link) => (
        <Link
          key={link.id}
          to={link.href}
          className="px-2 duration-200 ease-in-out hover:text-slate-400"
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};
