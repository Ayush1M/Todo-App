import {FC, type ReactNode } from "react"

type TodoItemProp = {
    id : string,
    children : ReactNode,
}

const TodoItem : FC<TodoItemProp> = ({ children }) => {
    return (
        <>
        <div>
        <p className="mt-4">{children}</p>
        </div>
        </>
    )
}

export default TodoItem