export const Todo = ({isComplete, title, id, deleteTodo}) => {
    return(
        <div className="todo">
            <input type="checkbox" checked = {isComplete} />
            <span className="todo__title">{title}</span> 
            <button onClick={() => deleteTodo(id)}>x</button>
        </div>
    )
} 