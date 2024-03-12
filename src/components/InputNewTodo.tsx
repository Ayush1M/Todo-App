import { FormEvent, useRef } from "react"

type InputProp = {
    addTodo : (todo : string) => void
}

const InputNewTodo = ({addTodo} : InputProp) => {

    const todo = useRef<HTMLInputElement>(null)
    

    function handleSubmit(e : FormEvent<HTMLFormElement>){
        e.preventDefault()
        
        const enteredTodo = todo.current!.value
        
        
        e.currentTarget.reset()
        addTodo(enteredTodo)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
        <label className="flex text-2xl mb-2" htmlFor="todo">Enter Todo</label>
        <input className="text-2xl border-2 border-slate-300 rounded-lg mr-4 py-2 pl-2" type="text" id="todo" placeholder="new todo" ref={todo} />
        <button className="px-4 py-2 rounded-xl text-2xl bg-orange-400">Add</button>
        </form>
        </>
    )
}

export default InputNewTodo