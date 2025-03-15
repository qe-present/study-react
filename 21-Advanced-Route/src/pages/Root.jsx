import MainNavigation from "../components/MainNavigation.jsx";
import {Outlet, useNavigation} from "react-router-dom";

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