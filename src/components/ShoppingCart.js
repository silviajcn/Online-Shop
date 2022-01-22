import React from 'react';
import CartItem from './CartItem';
import { ContainerPrincipal } from '../styles/Cart.elements';

const ShoppingCart = () => {
    
    return (
        <ContainerPrincipal>
            
            <h2>Carrito de compras</h2>
            <CartItem />
            
        </ContainerPrincipal>
    )
}

export default ShoppingCart