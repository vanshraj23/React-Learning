import { TodosContext } from '../Store/todo-items-store.jsx';
import { useContext } from 'react';
import styles from './WelcomeMessage.module.css';

function WelcomeMessage() {
    const { todos } = useContext(TodosContext);

    return (
        todos.length === 0 &&
        <h1 className={styles["welcome--message"]}>
            Enjoy your Day
        </h1>
    );
}

export default WelcomeMessage;