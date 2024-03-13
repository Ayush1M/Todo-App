import TodoItem from "./TodoItem"
import { TodoProp } from "../App"
import { ChangeEvent, FC } from "react"

type TodoListProps = {
  todos : TodoProp[],
  toggleTodos : (id : string, Completed : boolean) => void,
  DeleteTodos : (id : string) => void,
  filterTodos : TodoProp[]
}

const TodoItemList : FC<TodoListProps> = ({ todos, toggleTodos, DeleteTodos, filterTodos }) => {

  return (
      <>
      {todos.length === 0 && <div className="text-center mt-4 py-4 rounded-lg text-white text-2xl bg-secondary">No Todos</div>}
      <ul>
      {filterTodos.map(todo => (
      <li key={todo.id} className={todo.Completed ? "flex items-center justify-between mt-4 px-6 py-4 rounded-xl text-white bg-orange" : "flex items-center justify-between bg-secondary mt-4 px-6 py-4 rounded-xl text-white"}>
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