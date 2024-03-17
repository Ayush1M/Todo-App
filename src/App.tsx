import headerImage from "./images/header-image.png"
import Header from "./components/Header.tsx"
import { useEffect, useState } from "react"
import TodoItemList from "./components/TodoItemList.tsx"
import InputNewTodo from "./components/InputNewTodo.tsx"
import loadingImg from "./images/loading-image.png"


export type TodoProp = {
  id : string,
  description : string,
  Completed : boolean
}

type Timer = ReturnType<typeof setTimeout>

export default function App(){
  const [todos, setTodos] = useState<TodoProp[]>([])
  const [status, setStatus] = useState<string>("all")
  const [filterTodos, setFilterTodos] = useState<TodoProp[]>([])
  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [timeOutData, setTimeOutData] = useState<string>("")


  useEffect(() => {
    filterHandler(status)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [todos, status, loading])

  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add('dark')
    }else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])


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

  const timer : Timer = setTimeout(() => {
    setTimeOutData("Add and manage day to day tasks")
  }, 2000)

  return(
    <main className={loading ? "flex flex-col items-center min-h-screen bg-black" : "flex flex-col items-center min-h-screen dark:bg-black"}>
      {loading ? 
      <div className="flex flex-col items-center my-auto animate-bounce text-white"><img className="w-72 h-72" src={loadingImg} alt="loading image" /><h2 className="text-5xl mt-8">Todo</h2><h2 className="text-4xl mt-4">{timeOutData}</h2>
      </div> : 
      <div>
      <Header image={{src : headerImage , alt : "todo image"}} setDarkMode={setDarkMode} darkMode ={darkMode}>
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
      </div>}
    </main>
  )
}
