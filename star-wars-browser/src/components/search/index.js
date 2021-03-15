import { connect } from 'react-redux';
import Search from './Search';
import { getPageNumber } from '../../store/pagination/selectors';
import { changePage } from '../../store/pagination/actions';
import { fetchPeople, setPeople } from '../../store/people/actions';

const mapStateToProps = (state) => ({
  pageNumber: getPageNumber(state),
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (pageNumber) => dispatch(changePage(pageNumber)),
  setPeople: (peopleList) => dispatch(setPeople(peopleList)),
  fetchPeople: () => dispatch(fetchPeople()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
