import * as React from 'react';

interface ITodoProps {
  onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
  completed: boolean;
  text: string;
}

const Todo = ({ onClick, completed, text }: ITodoProps) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

export default Todo;
