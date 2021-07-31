import React from 'react';
import './GiveRating.css';

const GiveRatings = props =>{
    return(
        <div className="rating-container">
            <div className="box">
            <h2> Rate a doctor </h2>
            {/* <span className="close-icon" onClick={this.props.showPopup}>X</span> */}
            </div>
        </div>
    );
};


export default GiveRatings;