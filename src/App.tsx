import headerImage from "./images/header-image.png"
import Header from "./components/Header.tsx"
import { useState } from "react"
import TodoItemList from "./components/TodoItemList.tsx"


export type TodoProp = {
  id : number,
  description : string,
  isCompleted : boolean
}

export default function App(){
  const [todos, setTodos] = useState<TodoProp[]>([])

  const handleAddGoal = () => {
    setTodos(prevTodos => {
      const newTodos : TodoProp = {
        id : Math.random(),
        description : "",
        isCompleted : false
      }
      return [...prevTodos, newTodos]
    })
  }

  return(
    <main>
      <Header image={{src : headerImage , alt : "todo image"}}>
        <h2>Todo App</h2>
      </Header>
      <button onClick={handleAddGoal}>Add</button>
      <TodoItemList todos={todos} />
    </main>
  )
}