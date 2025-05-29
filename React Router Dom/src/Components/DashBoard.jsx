//import styles from './DashBoard.module.css';
import { Outlet } from "react-router-dom";

function DashBoard() {
    return <>
        <h1>DashBoard Page</h1>
        <Outlet/>
    </>;
}

export default DashBoard;