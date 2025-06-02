import AppTitle from './Components/AppTitle.jsx';
import AddTodo from './Components/AddTodo.jsx';
import WelcomeMessage from './Components/WelcomeMessage.jsx';
import TodoContainer from './Components/TodoContainer.jsx';
import TodosContextProvider from './Store/todo-items-store.jsx';
import './App.css';

function App() {
    return <>
        <AppTitle title={"Todo React App"}/>   
        <TodosContextProvider>
            <AddTodo/> 
            <WelcomeMessage/>
            <TodoContainer/>
        </TodosContextProvider>
    </>;
}

export default App;