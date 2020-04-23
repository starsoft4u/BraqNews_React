import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { addCategory, editCategory, deleteCategory } from '../actions/Category';
import Category from '../components/Category';

// const { menu } = useParams();

const mapStateToProps = (state, { match: { params } }) => ({
    data: state[params.menu].category,
    menu: params.menu,
});

export default withRouter(connect(
    mapStateToProps,
    { addCategory, editCategory, deleteCategory }
)(Category));
