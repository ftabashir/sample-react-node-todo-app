import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoList from './components/todo-list/TodoList';
import './index.css';
import * as models from './models'
import registerServiceWorker from './registerServiceWorker';

const todos: models.Todo[] = []

ReactDOM.render(
  <TodoList todos={todos} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
