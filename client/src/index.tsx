import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import TodoList from './containers/TodoList';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { initialStore, IStoreState } from './store'
import { TodoAction } from './store/actions'
import { middlewares } from './store/middlewares'
import { todoReducer } from './store/reducers'

const store = createStore<IStoreState, TodoAction, {}, {}>(
  todoReducer,
  initialStore,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
