import { connect } from 'react-redux';
import SearchResultsModal from './SearchResults';
import { getPageNumber } from '../../store/pagination/selectors';
import { getPeopleData } from '../../store/peopleData/selectors';
import { changePage, decrement, increment } from '../../store/pagination/actions';
import { setPeopleData } from '../../store/peopleData/actions';

const mapStateToProps = (state) => ({
  pageNumber: getPageNumber(state),
  peopleData: getPeopleData(state),
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  changePage: (pageNumber) => dispatch(changePage(pageNumber)),
  setPeopleData: (dataProvided) => dispatch(setPeopleData(dataProvided)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsModal);
