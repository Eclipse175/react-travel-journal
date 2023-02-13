import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="image-div">
                <img alt='japan' src={props.image}></img>
            </div>
            <div className='sub-card'>
                <div className='sub-sub-card'>
                    <svg id = 'location' xmlns="http://www.w3.org/2000/svg" data-name="Layer 3" viewBox="0 0 24 24">
                        <path fill = '#F55A5A' d="M12,2a8.009,8.009,0,0,0-8,8c0,3.255,2.363,5.958,4.866,8.819,0.792,0.906,1.612,1.843,2.342,2.791a1,1,0,0,0,1.584,0c0.73-.948,1.55-1.885,2.342-2.791C17.637,15.958,20,13.255,20,10A8.009,8.009,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z" />
                    </svg>
                    <p>{props.place}</p>
                    <a href='https://www.google.com/maps'>View on Google Maps</a>
                </div>
                <h1>{props.heading}</h1>
                <h4>{props.availability}</h4>
                <h5>{props.details}</h5>
            </div>
        </div>
    )
}

export default Card;