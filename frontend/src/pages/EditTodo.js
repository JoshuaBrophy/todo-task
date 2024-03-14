import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getTodo } from "../api/getTodo";
import { updateTodo } from "../api/updateTodo";
import { addTodo } from "../api/addTodo"; // Import addTodo function
import '../css/EditTodo.css'

const EditTodo = () => {
    const { id } = useParams();
    const [toUpdate, setToUpdate] = useState('');
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const submitHandler = async () => {

        let obj = {
            _id: toUpdate._id,
            text: userInput
        };
        
        // Call updateTodo API function here
        try {
            const response = await updateTodo(obj); // Assuming updateTodo is implemented in updateTodo.js
            console.log(response);
            alert('edited item');
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    useEffect(() => {
        const fetchTodo = async () => {

            let data = await getTodo(id)
            setToUpdate(data)
            setUserInput(data.text)
        }
        fetchTodo()
    },[id]);

    return (
        <div>
            <h1>Edit</h1>
            <h2>{toUpdate.text}</h2>

            <input 
                onChange={(e) => setUserInput(e.target.value)}
                value={userInput}
                value2={toUpdate} 

                value2={toUpdate}

            />
            <button onClick={submitHandler}>Submit</button>
        </div>
    );
}

export default EditTodo;
