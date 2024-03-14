import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getTodo } from "../api/getTodo"
import { updateTodo } from "../api/updateTodo"
const EditTodo = () => {

    const { id } = useParams()
    const [toUpdate, setToUpdate] = useState('')
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const submitHandler = async () => {
        try {
            await updateTodo({
                _id: toUpdate._id,
                text: userInput
            })
            alert('edited item')
        } catch (error){
            console.error('Error editing todo:', error)
            alert('Failed to edot item')
        }
        
    }

    useEffect(() => {
        const fetchTodo = async () => {
            let data = await getTodo(id)
            setToUpdate(data)
            setUserInput(data.text)
        }
        fetchTodo()
    },[id])
    return (
        <div>
            <h1>Edit</h1>
            <h2>{toUpdate.text}</h2>
            <input
                type="text"
                value={userInput}
                onChange={handleChange}
            />
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}
export default EditTodo