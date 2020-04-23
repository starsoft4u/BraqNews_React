import { connect } from 'react-redux'
import { selectMenu, activeMenu } from '../actions/SideMenu';
import SideMenu from '../components/SideMenu';

const mapStateToProps = state => ({
    selected: state.sideMenu.selected,
    active: state.sideMenu.active,
});

export default connect(
    mapStateToProps,
    { selectMenu, activeMenu }
)(SideMenu);