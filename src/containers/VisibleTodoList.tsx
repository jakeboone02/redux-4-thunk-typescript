import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { VisibilityFilters, toggleTodo } from '../actions';
import TodoList from '../components/TodoList';
import { IRootState } from '../reducers';
import { ITodo } from '../reducers/todos';

const getVisibleTodos = (todos: ITodo[], filter: VisibilityFilters) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state: IRootState) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
