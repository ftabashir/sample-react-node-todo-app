import * as React from 'react';
import * as models from '../../models';
import './Todo.css';

interface IProps {
  todo: models.Todo,
  isAdding: boolean,
  isRemoving: boolean,
  isEditing: boolean,
  onRemoveTodo: (todo: models.Todo) => void
  onEditTodo: (todo: models.Todo) => void
}

class Todo extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public onDueDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    this.props.onEditTodo({ ...this.props.todo, dueDate: new Date(value) });
  }

  public onPriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as models.Priority
    this.props.onEditTodo({ ...this.props.todo, priority: value });
  }
  public onCompletedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    this.props.onEditTodo({ ...this.props.todo, completed: value });
  }

  public onRemoveTodo = (todo: models.Todo) => () => this.props.onRemoveTodo(todo);

  public render() {
    const options = models.priorityOptions.map(option =>
      <option key={option} value={option}>{option}</option>
    );
    return (
      <div className="Todo">
        <input type="checkbox"
          onChange={this.onCompletedChange}
          checked={this.props.todo.completed} />
        <span className="Todo-desc">{this.props.todo.title}</span>
        <input type="date"
          onChange={this.onDueDateChange}
          value={this.props.todo.dueDate.toISOString().slice(0, 10)} />
        <select value={this.props.todo.priority} onChange={this.onPriorityChange}>{options}</select>
        <button onClick={this.onRemoveTodo(this.props.todo)}>X</button>
      </div>
    );
  }
}

export default Todo;
