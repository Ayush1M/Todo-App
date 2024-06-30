import TodoItem from "./TodoItem"
import { TodoProp } from "../App"
import React, { ChangeEvent, FC, useState } from "react"

type EditableTodo = {
  id : string,
  description : string
}

type TodoListProps = {
  todos : TodoProp[],
  toggleTodos : (id : string, Completed : boolean) => void,
  DeleteTodos : (id : string) => void,
  filterTodos : TodoProp[],
  setTodos : React.Dispatch<React.SetStateAction<TodoProp[]>>
}

const TodoItemList : FC<TodoListProps> = ({ todos, toggleTodos, DeleteTodos, filterTodos, setTodos}) => {

  const [editText, setEditText] = useState<EditableTodo>({
    id : "",
    description : ""
  })

  const handleEdit = (id : string) => {

    const todoEdit = todos.find(todo => todo.id === id)
    if(todoEdit){
      setEditText({id ,description : todoEdit.description}) 
    }
  }

  const handleSaveEdit = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editText.id ? { ...todo, description: editText.description } : todo
    );
    setTodos(updatedTodos);
    setEditText({id : "", description : ""}); 
  };

  return (
      <>
      {todos.length === 0 && <div className="text-center mt-4 py-4 rounded-lg text-white text-2xl bg-secondary">No Todos</div>}
      <ul>
      {filterTodos.map(todo => (
      <li key={todo.id} className={todo.Completed ? "flex items-center justify-between mt-4 px-6 py-4 rounded-xl text-white bg-orange-500" : "flex items-center justify-between bg-secondary mt-4 px-6 py-4 rounded-xl text-white"}>
      <TodoItem id={todo.id}>
      { editText && todo.id === editText.id ?
      <input type="text"
        className="text-xl text-black border-2 border-slate-300 rounded-lg mr-4 py-1 pl-2"
        value={editText.description} 
        onChange={e => setEditText({...editText , description : e.target.value})} /> :
      <label className={todo.Completed ? "line-through text-3xl" : "flex items-center text-3xl"}>
      <input type="checkbox"
      className="w-6 h-6 mr-4"
      id={todo.id}
      checked={todo.Completed} 
      onChange={(e : ChangeEvent<HTMLInputElement>) => toggleTodos(todo.id, e.target.checked)} />
      {todo.description}
      </label>}
      </TodoItem>
      <div>

      {!todo.Completed && (editText && todo.id === editText.id ?
      <button className="bg-white text-black hover:text-orange-400 p-1 rounded-lg font-bold hover:opacity-70 mr-4" 
      onClick={handleSaveEdit} disabled={editText.description === ""}>Save</button> : 
      <button className="bg-white text-black hover:text-orange-400 p-1 rounded-lg font-bold hover:opacity-70 mr-4" 
      onClick={() => handleEdit(todo.id)}>Edit</button>)} 
      <button className="bg-white text-black hover:text-orange-400 p-1 rounded-lg font-bold hover:opacity-70" 
      onClick={() => DeleteTodos(todo.id)}>Delete</button>
      </div>
      </li>
    ))}
    </ul>
    </>
  )
}

export default TodoItemList