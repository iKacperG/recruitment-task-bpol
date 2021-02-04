import { connect } from 'react-redux';
import SingleResult from './SingleResult';
import { getPageNumber } from '../../store/pagination/selectors';
import { changePage, decrement, increment } from '../../store/pagination/actions';

const mapStateToProps = (state) => ({
  pageNumber: getPageNumber(state),
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  changePage: (pageNumber) => dispatch(changePage(pageNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleResult);
