import React from 'react';

import './contact.css';

export default function Card(props) {
    return (
        <div className="contact">
            <img src={props.photo} className="contact-photo" alt="Contact"></img>
            <p className="contact-name">{props.name}</p>
            <p className="contact-address">{props.address}</p>
        </div>
    );
};

Card.defaultProps = {
    name: 'Aaron Brooks',
    photo: 'http://www.independent.ie/entertainment/movies/article29395847.ece/ALTERNATES/h342/PANews_N0189411372854031946A_I1.jpg',
    address: '380 N Chase St.'
};
