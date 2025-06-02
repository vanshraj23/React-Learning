import styles from './AppTitle.module.css';

function AppTitle({ title }) {
    return <>
        <h1 className={styles["app--Title"]}>{title}</h1>        
    </>;
}

export default AppTitle;