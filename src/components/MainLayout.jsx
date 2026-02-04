import { Outlet } from "react-router-dom";

import NavBar from "./NavBar";

const MainLayout = () => {

    return(
    <>
    <header className="main-header main-layout-widh"><NavBar /></header>
    <main className="mainContainer main-layout-widh">
        <Outlet />
    </main>
    </>);
}


export default MainLayout;