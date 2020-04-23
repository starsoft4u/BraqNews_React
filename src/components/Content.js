import React from 'react';
import { Switch, Route } from "react-router-dom";
import CategoryContainer from '../containers/CategoryContainer';

export default function Content() {
    return (
        <Switch>
            <Route path="/:menu/Category" children={<CategoryContainer />} />
        </Switch>
    );
}
