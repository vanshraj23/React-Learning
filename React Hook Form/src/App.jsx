import Form from './Components/Form.jsx';
import './App.css';

function App() {
    const validations = {
        required: {value: true, message: "Please fill the field!"},
        minLength: {value: 3, message: "There must be atleast 3 Characters"},
    };

    async function onSubmit(data) {
        await new Promise(resovle => setTimeout(resovle,5000));
        console.log(data);
    };

    return <>
        <Form onSubmit={onSubmit} validations={validations}/>
    </>;
}

export default App;