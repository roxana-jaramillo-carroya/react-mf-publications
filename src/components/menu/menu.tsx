import React, { useRef } from 'react'
import logo from '../../assets/images/cy-logo/cy_logo.svg';
import iconMenu from '../../assets/images/icons/cy_icon_hamb.svg';
import iconFeedbackActive from '../../assets/images/icons/cy_icon_star-active.svg';
import iconFeedbackHover from '../../assets/images/icons/cy_icon_star-hover.svg';
import iconFeedbackSelect from '../../assets/images/icons/cy_icon_star-select.svg';
import hoverImage from '../../assets/images/cy_hover.jpg';
import iconUser from '../../assets/images/icons/icon-user.png';

const Menu = () => {
    const topBar = useRef(null);
    const assetsTopBar = {
        logo,
        iconMenu,
        iconFeedbackActive,
        iconFeedbackHover,
        iconFeedbackSelect,
        hoverImage,
        iconUser,
    };
    const menu = [
        {
            link: ['/'],
            text: 'Buscar',
        },
        {
            link: ['/'],
            text: 'Publicar',
        },
        {
            link: ['/'],
            text: 'Servicios',
        },
    ];

    return (
        <>
            <top-bar
                id="topBar"
                ref={topBar}
                menu={JSON.stringify(menu)}
                assets={JSON.stringify(assetsTopBar)}
            />
        </>
    )
}

export default Menu;

