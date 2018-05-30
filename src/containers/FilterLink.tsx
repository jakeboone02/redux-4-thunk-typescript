import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';
import { IRootState } from '../reducers';

const mapStateToProps = (state: IRootState, ownProps: any) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
