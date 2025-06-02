import { TodosContext } from '../Store/todo-items-store.jsx';
import { useContext } from 'react';
import styles from './TodoItem.module.css';

function TodoItem({ todoName, todoDate }) {
    const { deleteTodo } = useContext(TodosContext);

    return <>
        <li className={styles["todo--item"]}>
            <span className={styles["todo--name"]}>{todoName}</span>
            <span className={styles["todo--date"]}>{todoDate}</span>
            <button 
                type="button" className={styles["delete--btn"]} 
                onClick={() => deleteTodo(todoName)}
            >
                Delete
            </button>
        </li>
    </>;
}

export default TodoItem;