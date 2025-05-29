//import styles from './Home.module.css';
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/about');
    };

    return <>
        <h1>
            Home Page
            <button type="button" onClick={handleClick}>
                About
            </button>
        </h1>
    </>;
}

export default Home;