const API_URL = `http://localhost:4000`;

export const deleteTodo = async (todo) => {
  const response = await fetch(`${API_URL}/todos/items/${todo._id}`, {
    method: 'DELETE',
    headers: {
        "Content-Type":"application/json" 
    },
  });

  const json = await response.json();
  return json;
};