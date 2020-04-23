import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { menu } from '../../constants';
import MenuItem from './MenuItem';
import SubMenuItem from './SubMenuItem';

const useStyles = makeStyles(theme => ({
    toolbar: theme.mixins.toolbar,
}));

const SideMenu = ({ selected, active, selectMenu, activeMenu }) => {
    const classes = useStyles();


    const handleClick = (menu, route) => {
        if (route) {
            active !== route && activeMenu(route);
        } else {
            selectMenu(selected === menu ? '' : menu);
        }
    }

    const menus = [];
    menu.forEach(({ name, title, data }) => {
        menus.push(
            <MenuItem
                key={name}
                name={name}
                title={title}
                subMenu={data}
                open={selected === name}
                onClick={handleClick}
            />
        );

        data && menus.push(
            <SubMenuItem
                key={`${name}-sub`}
                name={name}
                open={selected === name}
                onClick={handleClick}
            />
        )
    });

    return (
        <div>
            <div className={classes.toolbar} />
            <List>{menus}</List>
        </div >
    );
}

SideMenu.propTypes = {
    selected: PropTypes.string,
    active: PropTypes.string,
    selectMenu: PropTypes.func.isRequired,
    activeMenu: PropTypes.func.isRequired,
};

export default SideMenu;
