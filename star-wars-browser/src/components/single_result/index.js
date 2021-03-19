import { connect } from 'react-redux';
import SingleResult from './SingleResult';
import { getPageNumber } from '../../store/pagination/selectors';
import { changePage } from '../../store/pagination/actions';
import { fetchFilms } from '../../store/films/actions';
import { getFilms } from '../../store/films/selectors';
import { fetchPlanets } from '../../store/planets/actions';
import { getPlanets } from '../../store/planets/selectors';

const mapStateToProps = (state, ownProps) => ({
  pageNumber: getPageNumber(state),
  films: getFilms(state),
  planet: getPlanets(state, ownProps.planetUrl),
});

const mapDispatchToProps = (dispatch) => ({
  changePage: (pageNumber) => dispatch(changePage(pageNumber)),
  fetchFilms: (film) => dispatch(fetchFilms(film)),
  fetchPlanets: (person) => dispatch(fetchPlanets(person)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleResult);
