import {FC, type ReactNode } from "react"

type TodoItemProp = {
    id : number,
    children : ReactNode
}

const TodoItem : FC<TodoItemProp> = ({ children }) => {
    return (
        <>
        <div>
        <p>{children}</p>
        </div>
        </>
    )
}

export default TodoItem