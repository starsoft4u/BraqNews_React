import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import CategoryIcon from '../../assets/images/ic_category.png';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        color: `white`,
    }
}));

const MenuItem = ({ name, title, subMenu, open, onClick }) => {
    const classes = useStyles();

    const handleClick = () => onClick(name, subMenu ? false : `/${name}`);

    return (
        <ListItem
            key={name}
            className={classes.root}
            button
            component={subMenu ? `div` : NavLink}
            to={`/${name}`}
            onClick={handleClick}
        >
            <ListItemIcon><img src={CategoryIcon} alt="menu icon" /></ListItemIcon>
            <ListItemText primary={title} />
            {subMenu && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
    );
};

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default MenuItem;
