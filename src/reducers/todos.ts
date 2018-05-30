import { AnyAction } from 'redux';
import { ActionTypes } from '../actions';

export interface ITodo {
  id: number;
  completed: boolean;
  text: string;
}

const todos = (state: ITodo[] = [], action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          completed: false,
          text: action.text,
        },
      ];
    case ActionTypes.TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};
export default todos;
