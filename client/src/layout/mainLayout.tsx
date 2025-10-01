import { Header } from "@/components/header/header";
import { Outlet } from "react-router";

export const MainLayout = () => {
  // :::: return JSX ::::
  return (
    <>
      {/* header component */}
      <Header />

      {/* render of pages */}
      <main className="container mx-auto py-6">
        <Outlet />
      </main>
    </>
  );
};
