import { connect } from 'react-redux';
import SingleResult from './SingleResult';
import { getPageNumber } from '../../store/pagination/selectors';
import { changePage } from '../../store/pagination/actions';

const mapStateToProps = (state) => ({
  pageNumber: getPageNumber(state),
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (pageNumber) => dispatch(changePage(pageNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleResult);
