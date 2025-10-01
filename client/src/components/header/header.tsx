import type { FC } from "react";
import { Logo } from "../logo/logo";
import { Button } from "../ui/button";
import { Navbar } from "../navbar/navbar";
import { Link } from "react-router";

export const Header: FC = () => {
  // :::: return JSX ::::
  return (
    <header className="container bg-slate-100 mx-auto p-4 rounded-bl-lg rounded-br-lg flex justify-between">
      <div className="flex items-center gap-x-10">
        <Logo />
        <Navbar />
      </div>
        <Button asChild className="cursor-pointer">
            <Link to="/auth/login">Sign Up</Link>
        </Button>
    </header>
  );
};
