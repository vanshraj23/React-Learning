import { TodosContext } from '../Store/todo-items-store.jsx';
import TodoItem from './TodoItem.jsx';
import { useContext } from 'react';
import styles from './TodoContainer.module.css';

function TodoContainer() {
    const { todos : todoItems} = useContext(TodosContext);

    return <>
        <ul className={styles["todo--container"]}>
            {todoItems.map(
            (todo, index) => <TodoItem 
                key={index}
                todoName={todo.todoName}
                todoDate={todo.todoDate}
            />
            )}
        </ul>
    </>;
}

export default TodoContainer;