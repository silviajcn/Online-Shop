import React from 'react';
import { Link } from "react-router-dom";
import { ContainerPrincipal, ImgBanner, BtnComprarMenu } from '../styles/Home.elements';
import Menus from '../components/Menus';

const Home = () => {
    return (
        <ContainerPrincipal>    
            
            <ImgBanner src="https://res.cloudinary.com/silviajcn/image/upload/v1642707027/ONLINE%20SHOP%20%28prueba%20tecnica%203%29/Blanco_Marido_Cumplea%C3%B1os_Comida_Ideas_Foto_Collage_g1thsd.png" alt="banner" />

            <Menus />

        </ContainerPrincipal>
    )
}

export default Home