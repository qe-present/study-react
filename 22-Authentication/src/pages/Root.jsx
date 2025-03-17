import MainNavigation from "../components/MainNavigation.jsx";
import {Outlet, useNavigation} from "react-router";

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