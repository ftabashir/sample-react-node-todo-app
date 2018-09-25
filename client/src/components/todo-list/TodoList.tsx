import * as React from 'react';
import * as models from '../../models';
import Todo from '../todo/Todo'
import './TodoList.css';

interface IProps { todos: models.Todo[] }
interface IState { todos: models.Todo[] }

class TodoList extends React.Component<IProps, IState> {
  private newTodoRef: React.RefObject<HTMLInputElement>;
  constructor(props: IProps) {
    super(props);
    this.state = { todos: this.props.todos }
    this.newTodoRef = React.createRef();
  }

  public onKeyUp = (event: { keyCode: number }) => {
    const ENTER = 13;
    if (event.keyCode === ENTER) {
      if (this.newTodoRef.current) {
        this.setState({
          todos: [...this.state.todos, new models.Todo(this.newTodoRef.current.value)]
        });
        this.newTodoRef.current.value = '';
      }
    }
  }

  public onRemoveTodo = (id: string) => {
    const todos = this.state.todos;
    const index = todos.findIndex(todo => todo.title === id)
    todos.splice(index, 1);
    this.setState({ todos });
  }

  public render() {
    const todoItems = this.state.todos.map(todo =>
      <Todo key={todo.title} todo={todo} onRemoveTodo={this.onRemoveTodo} />
    );
    return (
      <div className="TodoList">
        <h3 className="TodoList_header">Todo list</h3>
        <input type="text" className="TodoList_new"
          ref={this.newTodoRef} onKeyUp={this.onKeyUp}
          placeholder="type task description here and hit Enter" />
        {todoItems}
      </div>
    );
  }
}

export default TodoList;
