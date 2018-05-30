import * as React from 'react';
import { ITodo } from '../reducers/todos';
import Todo from './Todo';

interface ITodoListProps {
  todos?: ITodo[];
  toggleTodo?: (x: number) => void;
}

const TodoList = ({
  todos = [],
  toggleTodo = (x: number) => void 0,
}: ITodoListProps) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
