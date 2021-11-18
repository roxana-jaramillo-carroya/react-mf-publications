import React from 'react'
import './LandingPublish.scss';
import Card from '../../components/card/Card';
import backgroundTop from '../../assets/images/landing-publish/background-top.svg';

const LandingPublish = () => {
    return (
        <>
            <div className="select-form-publish">
                <span className="text-select-form">
                    Elige la forma en la que deseas publicar tu vehículo
                </span>
            </div>
            <img src={backgroundTop}
                className="background-top"></img>

            <div className="cards-container">
                <Card />
                <Card />
            </div>
        </>
    )
}

export default LandingPublish;

