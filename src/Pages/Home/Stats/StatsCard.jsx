import React from 'react';
import PropTypes from 'prop-types';
const StatsCard = ({count,title}) => {
    return (
        <div className="card items-center bg-base-100 w-auto">
            <div className="card-body">
                <h2 className="card-title text-3xl md:text-5xl">{count}+</h2>
                <p className="">{title}</p>
                
            </div>
        </div>
    );
};

export default StatsCard;

StatsCard.propTypes = {
count:PropTypes.number,
title:PropTypes.string,
}