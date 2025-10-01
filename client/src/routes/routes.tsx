import { AuthLayout } from "@/layout/authLayout";
import { MainLayout } from "@/layout/mainLayout"
import { lazy } from "react"
import {  Route, Routes} from "react-router"

const LoginPage = lazy(() => import("@/pages/auth/login"))
const HomePage = lazy(() => import("@/pages/home/home"));

export const AppRoutes = () => {
    return <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<AuthLayout />}>
            <Route path="/auth/login" element={<LoginPage />}/>
        </Route>
    </Routes>
}