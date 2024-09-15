import React, { Children } from 'react';

import PropTypes from 'prop-types';
const ToolTip = ({data,children}) => {
    return (
        <div className='tooltip' data-tip={data}>
            {children}
        </div>
    );
};
ToolTip.propTypes = {
    data: PropTypes.string.isRequired, // Ensures data is a string and required
    children: PropTypes.node.isRequired, // Ensures children (React elements) are required
};

export default ToolTip;