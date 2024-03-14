const API_URL = `http://localhost:4000`;

export const addTodo = async (todo) => {
  const response = await fetch(`${API_URL}/todos/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });

  const json = await response.json();
  return json;
};
