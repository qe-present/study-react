import React from 'react';
import {Outlet} from 'react-router-dom'
import MainNavigation from "../component/MainNavigation.jsx";
export default function RootLayout(){
    return <>
      <MainNavigation/>
        <main>
        <Outlet/>
        </main>
    </>
}
