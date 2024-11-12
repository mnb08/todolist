import React from 'react'
import s from './App.module.scss'
import { Todo } from '../Todo'
import { CreateTodo } from '../CreateTodo'

export const App = () => {

    return (
        <>
            <h1>App component</h1>
            <CreateTodo />
            <Todo />
            <Todo />
            <Todo />
        </>
    )
        
}