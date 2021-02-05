import { connect } from 'react-redux';
import SearchResultsModal from './SearchResults';
import { getPageNumber } from '../../store/pagination/selectors';
import { getPeopleData } from '../../store/peopleData/selectors';
import { changePage } from '../../store/pagination/actions';
import { setPeopleData } from '../../store/peopleData/actions';

const mapStateToProps = (state) => ({
  pageNumber: getPageNumber(state),
  peopleData: getPeopleData(state),
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (pageNumber) => dispatch(changePage(pageNumber)),
  setPeopleData: (peopleList) => dispatch(setPeopleData(peopleList)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsModal);
