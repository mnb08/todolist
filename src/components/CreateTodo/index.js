import React from 'react'

export const CreateTodo = ({todolist, setTodolist}) => {
    // const [newTodo, setNewTodo] = React.useState({web: 'WWW'})
    const [valueText, setValueText] = React.useState('')
    
    const addTodo = () => {
        if(!valueText) return 
        const newTodo = {
            id: Date.now(),
            title: valueText,
            isComplete: false,
        }
        setTodolist([...todolist, newTodo])
    }

    return (
        <div className="createTodo">
            <input 
                value={valueText} 
                type="text" 
                placeholder="Введите название задачи"
                onChange={ e => setValueText(e.target.value)}
            />
            <button onClick={addTodo}>Создать задачу</button>
        </div>
    )
}