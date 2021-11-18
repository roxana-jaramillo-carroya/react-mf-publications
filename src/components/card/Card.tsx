import React from 'react';
import './Card.scss';
// import rectangleRed from '../../assets/images/card/rectangle-red.png';
// import rectangle2xRed from '../../assets/images/card/rectangle@2x-red.png';
// import rectangle3xRed from '../../assets/images/card/rectangle@3x-red.png';
import rectangleGray from '../../assets/images/card/rectangle-gray.svg';
import rectangleBackground from '../../assets/images/card/rectangle-background.svg';
// import rectangleGray from '../../assets/images/card/rectangle-gray.png';
// import rectangle2xGray from '../../assets/images/card/rectangle@2x-gray.png';
// import rectangle3xGray from '../../assets/images/card/rectangle@3x-gray.png';
import cardPublicar from '../../assets/images/card/card-publicar.png';
import cardPublicar2x from '../../assets/images/card/card-publicar@2x.png';
import cardPublicar3x from '../../assets/images/card/card-publicar@3x.png';


export default (): JSX.Element => {
    return (
        <div>
            <div className="content-current-card">
                <div className="card">
                    <img
                        className="rectangle-sell"
                        src={rectangleGray}
                    />
                    <span className="main-label">VENDER</span>
                    <div className="publish-vehicle">
                        <span className="text-publish">
                            Publica tu vehículo de una forma ágil y efectiva.
                        </span>
                    </div>
                    <img
                        className="rectangle-background"
                        src={rectangleBackground}
                    />
                    <div className="rectangle-gradient"></div>
                    <img
                        className="card-publish"
                        src={cardPublicar}
                        srcSet={`${cardPublicar2x} 2x, ${cardPublicar3x} 3x`}
                    />
                    <div className="receive-offers">
                        <span className="text-receive-offers">
                            Recibe ofertas de <span className="highlight">compradores interesados</span> en el vehículo que tienes. ¡Anímate y publica con nosotros!
                        </span>
                    </div>
                    <div className="btn-card">
                        {<cy-button type="tertiary" size="tag" variant="" onClick={open}>
                            <span className="cy-whitespace-nowrap cy-w-full">
                                Publicar ahora
                            </span>
                            {/* Falta flechita de botón */}
                        </cy-button>}
                        {/* <button
                            className="primary gray"
                        >
                            <h3>Publicar ahora</h3>
                            <span className="icon icon-cy_icon_chevron_right arrow"></span>
                        </button> */}
                    </div>
                </div>
            </div>
        </div >

    );
};
