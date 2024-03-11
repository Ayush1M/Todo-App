import headerImage from "./images/header-image.png"
import Header from "./components/Header.tsx"
import { useState } from "react"
import TodoItemList from "./components/TodoItemList.tsx"
import InputNewTodo from "./components/InputNewTodo.tsx"


export type TodoProp = {
  id : string,
  description : string,
  Completed : boolean
}

export default function App(){
  const [todos, setTodos] = useState<TodoProp[]>([])

  const handleAddTodo = (todo : string) => {
    setTodos(prevTodos => {
      const newTodos : TodoProp = {
        id : crypto.randomUUID(),
        description : todo,
        Completed : false
      }
      console.log(todos); 
      return [...prevTodos, newTodos]
    })
  }

  return(
    <main>
      <Header image={{src : headerImage , alt : "todo image"}}>
        <h2>Todo App</h2>
      </Header>
      <InputNewTodo addTodo={handleAddTodo}/>
      <TodoItemList todos={todos} />
    </main>
  )
}
