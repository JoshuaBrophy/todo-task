
const API_URL = `http://localhost:4000/todos/item:id`

export const deleteTodo = async (todo) => {
    // add url which is for delete
    // add the _id for the ':id' param
    const response = await fetch(API_URL, {
        // method type?
        method: 'DELETE',
        // content type?
        headers: {
            "Content-Type":"application/json"            
        }
    })
    // convert to json
   const json = await response.json()
    // return json
    return json
}