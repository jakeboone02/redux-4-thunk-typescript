import { combineReducers } from 'redux';
import todos, { ITodo } from './todos';
import visibilityFilter from './visibilityFilter';
import { VisibilityFilters } from '../actions';

export interface IRootState {
  todos: ITodo[];
  visibilityFilter: VisibilityFilters;
}

export default combineReducers({
  todos,
  visibilityFilter,
});
