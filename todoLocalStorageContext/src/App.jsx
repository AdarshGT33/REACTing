import { useEffect, useState } from "react";
import { TodoContextProvider } from "./context/TodoContext";
import TodoForm from './components/TodoForm'
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [{ id: Date.now(), ...title }, ...prev]);
  };

  const updateTodo = (id, title) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? title : prevTodo))
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, status: !prevTodo.status }
          : prevTodo
      )
    );
  };

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, removeTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
