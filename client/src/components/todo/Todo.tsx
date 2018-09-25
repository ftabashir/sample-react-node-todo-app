import * as React from 'react';
import * as models from '../../models';
import './Todo.css';

interface IProps {
  todo: models.Todo,
  onRemoveTodo: (id: string) => void
}
interface IState {
  isBusy: {
    forCreate: boolean,
    forDelete: boolean,
    forEdit: boolean
  }
  todo: models.Todo
}

class Todo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isBusy: {
        forCreate: false,
        forDelete: false,
        forEdit: false,
      },
      todo: this.props.todo
    }
  }

  public onDueDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ todo: { ...this.state.todo, dueDate: new Date(event.target.value) } });
  }

  public onPriorityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value as models.Priority
    this.setState({ todo: { ...this.state.todo, priority: value } });
  }

  public onRemoveTodo = (id: string) => () => this.props.onRemoveTodo(id)

  public render() {
    const options = models.priorityOptions.map(option =>
      <option key={option} value={option}>{option}</option>
    );
    return (
      <div className="Todo">
        <input type="radio" />
        <span className="Todo-desc">{this.props.todo.title}</span>
        <input type="date"
          onChange={this.onDueDateChange}
          value={this.state.todo.dueDate.toISOString().slice(0, 10)} />
        <select value={this.state.todo.priority} onChange={this.onPriorityChange}>{options}</select>
        <button onClick={this.onRemoveTodo(this.state.todo.title)}>X</button>
      </div>
    );
  }
}

export default Todo;
