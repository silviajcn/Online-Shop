import React from 'react';
import { Link } from "react-router-dom";
import { ContainerPrincipal, LogoContainer, Logo, Credits } from '../styles/Footer.elements';

const Footer = () => {
    return (
        <ContainerPrincipal>
            <LogoContainer>
                <Link to="/">
                    <Logo src="https://res.cloudinary.com/silviajcn/image/upload/v1642618071/ONLINE%20SHOP%20%28prueba%20tecnica%203%29/OnlineShop_xau223.svg" alt="logo" />
                </Link>
            </LogoContainer>

            <div>
                <Credits>© 2021, Online Shop By Silvi.</Credits>
            </div>
        </ContainerPrincipal>
    )
}

export default Footer