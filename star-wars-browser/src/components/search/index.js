import { connect } from 'react-redux';
import Search from './Search';
import { getPageNumber } from '../../store/pagination/selectors';
import { changePage } from '../../store/pagination/actions';
import { setPeopleData } from '../../store/peopleData/actions';

const mapStateToProps = (state) => ({
  pageNumber: getPageNumber(state),
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (pageNumber) => dispatch(changePage(pageNumber)),
  setPeopleData: (peopleList) => dispatch(setPeopleData(peopleList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
