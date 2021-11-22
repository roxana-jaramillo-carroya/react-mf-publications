import React from 'react'
import './LandingPublish.scss';
import Card from '../../components/card/Card';
import backgroundTop from '../../assets/images/landing-publish/background-top.svg';
import cardPublish from '../../assets/images/card/card-publicar.png';
import cardPublish2x from '../../assets/images/card/card-publicar@2x.png';
import cardPublish3x from '../../assets/images/card/card-publicar@3x.png';
import cardQuickSale from '../../assets/images/card/card-venta-rapida.png';
import cardQuickSale2x from '../../assets/images/card/card-venta-rapida@2x.png';
import cardQuickSale3x from '../../assets/images/card/card-venta-rapida@3x.png';

const LandingPublish = () => {

    const valuescardPublish = {
        labelRibbon: "VENDER",
        title: "Publica tu vehículo de una forma ágil y efectiva.",
        descriptionStart: "Recibe oferta de ",
        descriptionHighlight: "compradores interesados ",
        descriptionEnd: "en el vehículo que tienes. ¡Anímate y publica con nosotros!",
        labelButton: "Publicar ahora",
        imgCard: cardPublish
    }
    const assetscardPublish = {
        imgCard: cardPublish,
        imgCard2x: cardPublish2x,
        imgCard3x: cardPublish3x,
        secondaryColor: "R-400",
    }
    const valuesCardQuickSale = {
        labelRibbon: "CONCESIONARIOS",
        title: "¿Necesitas acelerar la venta de tu vehículo?",
        descriptionStart: "Recibe oferta de nuestros ",
        descriptionHighlight: "concesionarios aliados ",
        descriptionEnd: "de manera fácil, rápida y segura. ",
        labelButton: "Vender rápido ahora",
        imgCard: cardPublish
    }
    const assetsCardQuickSale = {
        imgCard: cardQuickSale,
        imgCard2x: cardQuickSale2x,
        imgCard3x: cardQuickSale3x,
        secondaryColor: "A-800",
    }

    return (
        <>
            <div className="cy-flex cy-bg-CD-800 cy-rounded-b-lg cy-relative cy-w-full background-top">
                <img src={backgroundTop}
                    className="cy-opacity-70 cy-w-full"></img>
            </div>
            <div className="cy-flex cy-absolute cy-w-full cy-justify-center main-container">
                <div className="cy-flex cy-flex-col cy-absolute text-select-form">
                    <cy-text class="cy-text-3xl cy-font-black cy-text-CL-0 cy-leading-snug">
                        Elige la forma en la que deseas publicar tu vehículo
                    </cy-text>
                </div>
                <div className="cy-flex cy-flex-col sm:cy-flex-row cy-absolute cy-gap-24 cards-container">
                    <Card values={valuescardPublish} assets={assetscardPublish} />
                    <Card values={valuesCardQuickSale} assets={assetsCardQuickSale} />
                </div>
            </div>
        </>
    )
}

export default LandingPublish;

