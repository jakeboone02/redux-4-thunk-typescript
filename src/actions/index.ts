import { ThunkAction } from 'redux-thunk';
import { IRootState } from '../reducers';

let nextTodoId = 0;

type SideEffect<T = any> = ThunkAction<T, IRootState, {}, any>;

export const addTodo = (text: string): SideEffect => dispatch => {
  dispatch({
    type: ActionTypes.ADD_TODO,
    id: nextTodoId++,
    text,
  });
};

export const setVisibilityFilter = (filter: VisibilityFilters) => ({
  type: ActionTypes.SET_VISIBILITY_FILTER,
  filter,
});

export const toggleTodo = (id: number) => ({
  type: ActionTypes.TOGGLE_TODO,
  id,
});

export enum VisibilityFilters {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
}

export enum ActionTypes {
  ADD_TODO,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
}
