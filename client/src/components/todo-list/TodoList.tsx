import * as React from 'react';
import * as models from '../../models';
import Todo from '../todo/Todo'
import './TodoList.css';

interface IProps {
  todos: {
    [id: string]: {
      model: models.Todo,
      isAdding: boolean,
      isRemoving: boolean,
      isEditing: boolean
    }
  },
  onAddTodo: (todo: models.Todo) => void,
  onEditTodo: (todo: models.Todo) => void,
  onRemoveTodo: (todo: models.Todo) => void,
}

class TodoList extends React.Component<IProps> {
  private newTodoRef: React.RefObject<HTMLInputElement>;
  constructor(props: IProps) {
    super(props);
    this.newTodoRef = React.createRef();
  }

  public onKeyUp = (event: { keyCode: number }) => {
    const ENTER = 13;
    if (event.keyCode === ENTER) {
      if (this.newTodoRef.current) {
        this.props.onAddTodo(new models.Todo(this.newTodoRef.current.value));
        this.newTodoRef.current.value = '';
      }
    }
  }

  public render() {
    const todoItems = Object.keys(this.props.todos).map(todoId => {
      const todoInfo = this.props.todos[todoId];
      return <Todo
        todo={todoInfo.model} key={todoInfo.model.id}
        isAdding={todoInfo.isAdding} isRemoving={todoInfo.isRemoving} isEditing={todoInfo.isEditing}
        onEditTodo={this.props.onEditTodo} onRemoveTodo={this.props.onRemoveTodo} />
    });
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
