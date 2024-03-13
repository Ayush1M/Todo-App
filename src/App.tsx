import headerImage from "./images/header-image.png"
import Header from "./components/Header.tsx"
import { useEffect, useState } from "react"
import TodoItemList from "./components/TodoItemList.tsx"
import InputNewTodo from "./components/InputNewTodo.tsx"


export type TodoProp = {
  id : string,
  description : string,
  Completed : boolean
}

export default function App(){
  const [todos, setTodos] = useState<TodoProp[]>([])
  const [status, setStatus] = useState<string>("all")
  const [filterTodos, setFilterTodos] = useState<TodoProp[]>([])

  useEffect(() => {
    filterHandler(status)
  }, [todos, status])


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

  const DeleteTodos = (id : string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  const filterHandler = (status : string) => {
    if(status === "completed"){
      setFilterTodos(todos.filter(todo => todo.Completed === true))
    }else if (status === "active"){
      setFilterTodos(todos.filter(todo => todo.Completed === false))
    }else{
      setFilterTodos(todos)
    }
  }


  return(
    <main className="flex flex-col items-center bg-black min-h-screen font-truculenta">
      <Header image={{src : headerImage , alt : "todo image"}}>
        <h2>Todo App</h2>
      </Header>
      <div>
      <InputNewTodo addTodo={handleAddTodo} setStatus={setStatus} />
      <TodoItemList 
      todos={todos} 
      toggleTodos={toggleTodos} 
      DeleteTodos={DeleteTodos} 
      filterTodos={filterTodos} />
      </div>
    </main>
  )
}
