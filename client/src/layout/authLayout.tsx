import { Outlet } from "react-router"

export const AuthLayout = () => {
    // :::: return JSX ::::
    return <div className="h-screen flex items-center justify-center">
        <Outlet />
    </div>
}