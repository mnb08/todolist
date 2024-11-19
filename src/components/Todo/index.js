export const Todo = ({isComplete, title, id}) => {
    return(
        <div className="todo">
            <input type="checkbox" checked = {isComplete} />
            <span className="todo__title">{title}</span>
        </div>
    )
} 