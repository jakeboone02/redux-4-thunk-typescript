import { AnyAction } from 'redux';
import { ActionTypes, VisibilityFilters } from '../actions';
​
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
​
export default visibilityFilter