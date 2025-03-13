import MainNavigation from "../components/MainNavigation.jsx";
import {Outlet} from "react-router-dom";

export default function Root() {
    return(
        <>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}