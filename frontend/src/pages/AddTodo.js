import { useState } from "react"

import { addTodo } from '../api/addTodo';


const addTodo = () => {
    const [userInput, setUserInput] = useState("")

    const handleChange = (e) => {
        setUserInput(e.target.value);
    };

    const handler = async (e) => {
        e.preventDefault()
        // what function will run?

        let response = addTodo(userInput) 

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

                    onChange={(e) => setUserInput(e.target.value)}

                />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddTodo