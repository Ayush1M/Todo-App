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
      return [...prevTodos, newTodos]
    })
  }

  const toggleTodos = (id : string, Completed : boolean) =>{
    setTodos(prevTodos => {
      return prevTodos.map(todo => {
        if(todo.id === id){
          return {...todo, Completed}
        }
        return todo
      })
    })
  }

  function DeleteTodos(id : string){
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }


  return(
    <main className="flex flex-col items-center">
      <Header image={{src : headerImage , alt : "todo image"}}>
        <h2>Todo App</h2>
      </Header>
      <div>
      <InputNewTodo addTodo={handleAddTodo} />
      <TodoItemList todos={todos} toggleTodos={toggleTodos} DeleteTodos={DeleteTodos} />
      </div>
    </main>
  )
}
