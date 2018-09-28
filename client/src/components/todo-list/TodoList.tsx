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

interface IState {
  sortBy?: 'title' | 'dueDate' | 'priority',
  todos: Array<{
    model: models.Todo,
    isAdding: boolean,
    isRemoving: boolean,
    isEditing: boolean
  }>
}

class TodoList extends React.Component<IProps, IState> {
  private newTodoRef: React.RefObject<HTMLInputElement>;
  constructor(props: IProps) {
    super(props);
    this.newTodoRef = React.createRef();
    this.state = { todos: Object.values(this.props.todos) };
  }

  public componentWillReceiveProps(nextProps: IProps) {
    const state = { todos: Object.values(nextProps.todos) };
    this.setState(state);
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
  public sortBy = (by: 'title' | 'dueDate' | 'priority') => () => {
    this.setState({ ...this.state, sortBy: by });
  }

  public render() {
    let todoInfos = this.state.todos;
    const sortBy = this.state.sortBy;
    if (sortBy) {
      const comparator = (todoInfo1: { model: models.Todo }, todoInfo2: { model: models.Todo }) =>
        models.TodoComparators.get(sortBy)(todoInfo1.model, todoInfo2.model);
      todoInfos = todoInfos.slice(0).sort(comparator)
    }
    const todoItems = todoInfos.map(todoInfo => {
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
        <br />
        <div className='sort-section'>
          <span>Sort by:</span>
          <a className={sortBy === 'title' ? 'sort-item active' : 'sort-item'}
            onClick={this.sortBy('title')}>Name</a>
          <a className={sortBy === 'dueDate' ? 'sort-item active' : 'sort-item'}
            onClick={this.sortBy('dueDate')}>DueDate</a>
          <a className={sortBy === 'priority' ? 'sort-item active' : 'sort-item'}
            onClick={this.sortBy('priority')}>Priority</a>
        </div>
        {todoItems}
      </div>
    );
  }
}

export default TodoList;
