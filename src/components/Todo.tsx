const Todo = ({ children, ...props }) => (
  <aside className="todo" {...props}>
    ✏️ <b>TODO</b>: {children}
  </aside>
)

export default Todo
