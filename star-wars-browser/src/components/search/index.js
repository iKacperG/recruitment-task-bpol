import { connect } from 'react-redux';
import Search from './Search';
import { getPageNumber } from '../../store/pagination/selectors';
import { changePage, decrement, increment } from '../../store/pagination/actions';
import { setPeopleData } from '../../store/peopleData/actions';

const mapStateToProps = (state) => ({
  pageNumber: getPageNumber(state),
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  changePage: (pageNumber) => dispatch(changePage(pageNumber)),
  setPeopleData: (dataProvided) => {
    console.log(dataProvided);
    return dispatch(setPeopleData(dataProvided));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
