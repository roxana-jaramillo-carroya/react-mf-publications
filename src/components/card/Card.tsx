import React from 'react';
import './Card.scss';
import rectangleBackground from '../../assets/images/card/rectangle-background.svg';
import arrow from '../../assets/images/icons/cy_icon_chevron_right.svg';

export default ({ values, assets }) => {
    return (
        <div>
            <div className="cy-flex cy-relative cy-rounded-xl cy-bg-CL-0 card cy-group">
                <div className={`cy-flex cy-relative cy-rounded-b-xl rectangle-ribbon cy-bg-${assets.secondaryColor} sm:cy-bg-CD-600 sm:group-hover:cy-bg-${assets.secondaryColor}`}>
                    <span className="cy-flex cy-absolute cy-font-black cy-text-CL-0 cy-pt-4 cy-tracking-wider text-ribbon">{values.labelRibbon}</span>
                </div>
                <div className="cy-flex cy-absolute cy-text-center cy-top-40">
                    <cy-text class="cy-text-2xl cy-font-black cy-pr-40 cy-pl-40 title">
                        {values.title}
                    </cy-text>
                </div>
                <img
                    className="cy-absolute cy-object-contain cy-border cy-border-solid cy-border-CL-400 cy-rounded-xl cy-opacity-50 rectangle-background"
                    src={rectangleBackground}
                />
                <div className="rectangle-gradient"></div>
                <img
                    className="card-publish"
                    src={assets.imgCard}
                    srcSet={`${assets.imgCard2x} 2x, ${assets.imgCard3x} 3x`}
                />
                <div className="description">
                    <span className="cy-text-sm cy-text-CD-600 text-description">
                        {values.descriptionStart}<span className={`cy-font-black cy-text-${assets.secondaryColor}`}>{values.descriptionHighlight}</span> {values.descriptionEnd}
                    </span>
                </div>
                <div className="cy-w-full btn-content">
                    {<cy-button type="tertiary" size="tag" variant="" onClick={open}>
                        <span className="cy-whitespace-nowrap cy-w-full">
                            {values.labelButton}
                        </span>
                        <img src={arrow} alt=">" className="cy-absolute cy-top-0"></img>
                    </cy-button>}
                </div>
            </div>
        </div>

    );
};
