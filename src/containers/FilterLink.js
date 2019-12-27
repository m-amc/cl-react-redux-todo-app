import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

// ownProps is used so we can access the "filter" prop passed in FilterLink by the Footer component
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
  vFilter: state.visibilityFilter, //just for sanity check
  oProps: ownProps.filter // just for sanity check
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

// active and onClick props will now be available in the Link component
export default connect(mapStateToProps, mapDispatchToProps)(Link);