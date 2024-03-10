import TodoItem from "./TodoItem"
import { TodoProp } from "../App"
import { FC } from "react"

type TodoListProps = {
    todos : TodoProp[]
}

const TodoItemList : FC<TodoListProps> = ({ todos }) => {
    
    return (
        <>
        <ul>
        {todos.map(todo => (
        <li key={todo.id}>
        <TodoItem id={todo.id}>
        {todo.description}
        </TodoItem>
        </li>
      ))}
      </ul>
      </>
    )
}

export default TodoItemList