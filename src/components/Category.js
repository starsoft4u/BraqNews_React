import React from 'react';
import { PropTypes } from 'prop-types';

const Category = ({ data, menu }) => {
    console.log(menu);
    if (!menu) {
        return (
            <div>
                <h1>Welcome!</h1>
                <h3>Select the menu on the left to go!</h3>
            </div>
        );
    }

    return (
        <div>
            <h1>Hi</h1>
            <div>{menu}</div>
        </div>
    )
}

Category.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Category;