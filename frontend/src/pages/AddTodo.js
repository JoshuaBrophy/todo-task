
import { useState } from "react";
import { addTodo } from '../api/addTodo';

const AddTodo = () => {
    const [userInput, setUserInput] = useState("");


    const handleChange = (e) => {
        setUserInput(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await addTodo(userInput);
            console.log(response);
            setUserInput("");
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    return (
        <div>
            <h1>Add Item</h1>
            <form onSubmit={handleSubmit}>

                <input 
                    type="text"
                    value={userInput}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddTodo;
