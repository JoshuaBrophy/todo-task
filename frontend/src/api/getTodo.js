const API_URL = `http://localhost:4000`

export const getTodo = async (id) => {
    try {
        const response = await fetch(`${API_URL}/todos/item/${id}`);

        if (!response.ok) {
            throw new Error('Failed to fetch todo');
        }
 // Parse the JSON response from the server
        const todo = await response.json();
        return todo;
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        console.error('Error fetching todo:', error);
    }

}