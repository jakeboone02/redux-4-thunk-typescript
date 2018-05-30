import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addTodo } from '../actions';

interface IAddTodoProps {
  dispatch: Dispatch<any>;
}

const AddTodo = ({ dispatch }: IAddTodoProps) => {
  let input: HTMLInputElement;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input ref={node => (input = node as HTMLInputElement)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
