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
        <label htmlFor="todo">Enter Todo</label>
        <input type="text" id="todo" placeholder="new todo" ref={todo} />
        <button>Add</button>
        </form>
        </>
    )
}

export default InputNewTodo