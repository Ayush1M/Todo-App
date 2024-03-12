import TodoItem from "./TodoItem"
import { TodoProp } from "../App"
import { ChangeEvent, FC } from "react"

type TodoListProps = {
    todos : TodoProp[],
    toggleTodos : (id : string, Completed : boolean) => void,
    DeleteTodos : (id : string) => void
}

const TodoItemList : FC<TodoListProps> = ({ todos, toggleTodos, DeleteTodos }) => {
    
    return (
        <>
        {todos.length === 0 && <div className="text-center mt-4 text-2xl">No Todos</div>}
        <ul>
        {todos.map(todo => (
        <li key={todo.id} className="flex items-center justify-between bg-orange-400 mt-4 p-2 rounded-xl text-white">
        <TodoItem id={todo.id}>
        <label className={todo.Completed ? "line-through text-3xl" : "flex items-center text-3xl"}>
        <input type="checkbox"
        className="w-6 h-6 mr-4"
        id={todo.id}
        checked={todo.Completed} 
        onChange={(e : ChangeEvent<HTMLInputElement>) => toggleTodos(todo.id, e.target.checked)} />
        {todo.description}
        </label>
        </TodoItem>
        <div>
        <button className="bg-white text-black hover:text-orange-400 p-1 rounded-lg" onClick={() => DeleteTodos(todo.id)}>Delete</button>
        {/* <button className="bg-orange-400 p-1 rounded-lg" onClick={() => EditTodos(e, todo.id)}>Edit</button> */}
        </div>
        </li>
      ))}
      </ul>
      </>
    )
}

export default TodoItemList