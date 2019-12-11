import React, {useEffect, useState} from "react";

const DateCard = props => {

    return (
        <div className="individualContainer">
            <div className="date">{props.date} </div>
            <div className="contentContainer">
                <div className="titleDescriptionContainer">
                    <div className="title">
                        <h2>{props.title}</h2>
                    </div>
                    <div className="description">
                        {props.explanation}
                    </div>
                </div>
                <div className="imageContainer">
                    <img className="image" src={props.hdurl} alt={props.title} />
                </div>
            </div>
        </div>
    )
};

export default DateCard;


