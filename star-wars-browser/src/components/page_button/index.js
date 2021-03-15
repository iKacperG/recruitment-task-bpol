import { connect } from 'react-redux';
import PageButton from './PageButton';
import { changePage } from '../../store/pagination/actions';
import { getPageNumber } from '../../store/pagination/selectors';

const mapStateToProps = (state) => ({
  pageNumber: getPageNumber(state),
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (pageNumber) => dispatch(changePage(pageNumber)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PageButton);
