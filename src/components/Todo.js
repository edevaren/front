import c from "./style/Todo.module.css";

function Todo(props) {
  return (
    <div className={c.container}>
      <div>{props.taskTitle}</div>
      <input type="checkbox" checked={props.done} />
    </div>
  );
}

export default Todo;
