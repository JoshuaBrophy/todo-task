import { useState } from "react"
import { AddTodo } from "../api"

const addTodo = () => {
    const [userInput, setUserInput] = useState("")

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    const handler = async (e) => {
        e.preventDefault()
        // what function will run?
        try {
            let response = await addTodo (userInput)
        console.log(response)
        } catch (error) {
            console.error('Error adding todo:', error)
        }
        setUserInput("");
    }

    return (
        <div>
            <h1>
                add item
            </h1>
            <form onSubmit={handler}>
                <input 
                type="text"
                    value={userInput}
                    onChange={handleChange}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddTodo