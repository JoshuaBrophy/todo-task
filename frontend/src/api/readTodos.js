const API_URL = `http://localhost:4000`

export const readTodos = async () => {
     try {
          // your backend server is running on port 4000
          // this request is for the 'getTodos' controller
          let response = await fetch(`${API_URL}/todos/items`);
          if (!response.ok) {
               throw new Error('Failed to fetch todos');
          }
          // convert to json()
          let data = await response.json()
          // return the data collect from fetch
          return data    
     } catch (error){
          console.error('Error fetching todos:', error);
     }
     // from your routes>items.js 
     // this request is for the 'getTodos' controller
     
}