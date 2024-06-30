import { ChangeEvent, FormEvent} from "react"

type InputProp = { 
    setStatus : React.Dispatch<React.SetStateAction<string>>,
    addTodo : (todo : string) => void,
    text : string,
    setText : React.Dispatch<React.SetStateAction<string>>,
}

const InputNewTodo = ({addTodo, setStatus, text, setText} : InputProp) => {

    function handleSubmit(e : FormEvent<HTMLFormElement>){
        e.preventDefault()

        addTodo(text)
        setText("")
    } 

    const statusHandler = (e : ChangeEvent<HTMLSelectElement>) => {
        setStatus(e.target.value);
    } 

    return(
        <>
        <form className="bg-secondary px-10 py-8 rounded-xl" onSubmit={handleSubmit}>
        <div className="flex justify-between mb-4">    
        <label className="flex text-2xl mb-2 text-white" htmlFor="todo">Enter Todo</label>
        <select onChange={statusHandler} name="" className="border-2 rounded-lg">
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
        </select>
        </div>
        <input className="text-2xl border-2 border-slate-300 rounded-lg mr-4 py-2 pl-2" 
        type="text" 
        id="todo" 
        placeholder="new todo"
        value={text}
        onChange={e => setText(e.target.value)} />
        <button className="px-4 py-2 rounded-xl text-2xl bg-orange hover:opacity-70 cursor-pointer hover:text-white"
        disabled={text === ""}>
            Add
        </button>
        </form>  
        </>
    )
}

export default InputNewTodo