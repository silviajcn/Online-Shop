import React from 'react';
import ShoppingCart from '../components/ShoppingCart';
import MenuDay from '../components/MenuDay';
import { ContainerPrincipalDos, ContainerDoble, BannerMenu } from '../styles/Home.elements';

const DayProduct = () => {
    return (
        <ContainerPrincipalDos>

            <BannerMenu src="https://res.cloudinary.com/silviajcn/image/upload/v1642883988/ONLINE%20SHOP%20%28prueba%20tecnica%203%29/Rojo_Azul_Educaci%C3%B3n_LinkedIn_Banner_kr3kcl.png" alt="banner" />

            <ContainerDoble>
                <MenuDay />

                <ShoppingCart />
            </ContainerDoble>

            
            
        </ContainerPrincipalDos>
    )
}

export default DayProduct