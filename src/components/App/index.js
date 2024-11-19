import React, { useState } from 'react'
import s from './App.module.scss'
import { Todo } from '../Todo'
import { CreateTodo } from '../CreateTodo'

const todoArr = [
    {id: 1, title: 'finish homework', isComplete: false},
    {id: 2, title: 'build house', isComplete: true},
    {id: 3, title: 'go to exam lesson', isComplete: true},
    {id: 4, title: 'clean house', isComplete: false},
]

export const App = () => {
 
    const [todolist, setTodolist] = useState(todoArr)
    console.log(todolist)
    return (
        <>
            <h1>App component</h1>
            <CreateTodo />
            {
                todolist.map(todo => {
                    return <Todo title={todo.title} isComplete = {todo.isComplete} id = {todo.id} />

                })
            }
        </>
    )
        
}