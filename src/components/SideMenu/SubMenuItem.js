import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DotIcon from '../../assets/images/ic_dot.png';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4),
        color: 'white',
    },
}));

const SubMenuItem = ({ name, open, onClick }) => {
    const classes = useStyles();

    const handleClick = (route) => onClick(name, `/${name}/${route}`);

    return (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem
                    key="category"
                    className={classes.nested}
                    button
                    component={NavLink}
                    to={`/${name}/category`}
                    onClick={() => handleClick('category')}
                >
                    <ListItemIcon><img src={DotIcon} alt="submenu icon" /></ListItemIcon>
                    <ListItemText primary="Categories" />
                </ListItem>
                <ListItem
                    key="source"
                    className={classes.nested}
                    button
                    component={NavLink}
                    to={`/${name}/source`}
                    onClick={() => handleClick('source')}
                >
                    <ListItemIcon><img src={DotIcon} alt="submenu icon" /></ListItemIcon>
                    <ListItemText primary="Sources" />
                </ListItem>
            </List>
        </Collapse>
    );
};

SubMenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SubMenuItem;
