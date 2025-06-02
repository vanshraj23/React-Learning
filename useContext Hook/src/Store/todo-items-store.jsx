import { createContext, useReducer } from "react";

export const TodosContext = createContext({
    todos: [],
    addNewTodo: () => {},
    deleteTodo: () => {}
});

function todosReducer(currState,action) {
    switch(action?.type) {
        case 'ADD_TODO':
        return [
            ...currState,
            action?.payload
        ];

        case 'DELETE_TODO': 
        return currState.filter
        (todo => todo.todoName !== action?.payload?.todoName);

        default:
        return currState;
    }
}

function TodosContextProvider({ children }) {
    const [ todos, todoDispatch ] = useReducer(todosReducer,[]);

    function addNewTodo(todoName,todoDate) {
        const action = {
            "type": 'ADD_TODO',
            "payload": {
                "todoName": todoName,
                "todoDate": todoDate
            }
        };
        todoDispatch(action); 
    };

    function deleteTodo(todoName) {
        const action = {
            "type": 'DELETE_TODO',
            "payload": {
                "todoName": todoName
            }
        };
        todoDispatch(action);
    };

    return <TodosContext.Provider value={{
            "todos": todos,
            "addNewTodo": addNewTodo,
            "deleteTodo": deleteTodo
        }}>
            {children}
    </TodosContext.Provider>;
}

export default TodosContextProvider;