import { TodosContext } from '../Store/todo-items-store.jsx';
import { useContext, useRef } from 'react';
import styles from './AddTodo.module.css';

function AddTodo() {
    const { addNewTodo } = useContext(TodosContext);

    const todoNameRef = useRef(null);
    const todoDateRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();

        const todoName = todoNameRef.current.value.trim();
        const todoDate = todoDateRef.current.value.trim();

        if (todoName && todoDate) {
            addNewTodo(todoName,todoDate);

            todoNameRef.current.value = "";
            todoDateRef.current.value = "";
        } else {
            alert("Please enter the fields!!");
        }
    };

    return <>
        <form className={styles["todo--form"]} onSubmit={handleSubmit}>
            <input 
                type="text" name='todoName' 
                id={styles["todo--name"]} placeholder='Add todo...'
                ref={todoNameRef}
            />
            <input 
                type="date" name='todoDate' 
                id={styles["todo--date"]}
                ref={todoDateRef}
            />
            <button type="submit" className={styles["submit--btn"]}>
                Add
            </button>
        </form>
    </>;
}

export default AddTodo;