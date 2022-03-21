import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContainerPrincipal, ContainerIngredients, ImgProduct, DataProduct, NameProduct, BrandProduct, PriceProduct, Price, AddProduct, BtnAddCart, IconCart } from '../styles/Products.elements';
//import { useNavigate } from "react-router-dom";
import { RiShoppingCart2Line } from "react-icons/ri";
import { addCartSync } from '../actions/actionShopping';
import { categoryProductAsync } from '../actions/actionProducts';

const MenuDay = () => {

    const dispatch = useDispatch();

    //let history = useNavigate();

    const { products } = useSelector((store) => store.products);
    //console.log(products)

    useEffect(() => {
      dispatch(categoryProductAsync());
      // dispatch(listProductsAsync());
    }, [dispatch]);
    
    return (
      <ContainerPrincipal>
            <h2>Ingredientes para el plato del dia:</h2>

        <>
        {
            products.map((e, i) => (
                
            <ContainerIngredients key={i}>
                
              <div>
                <ImgProduct src={e.image} alt="..." />
              </div>

              <DataProduct>
                <NameProduct>{e.product}</NameProduct>
                <BrandProduct>Marca: {e.brand}</BrandProduct>
                <BrandProduct>Cantidad: {e.quantity}</BrandProduct>
              </DataProduct>

              <PriceProduct>
                <Price>Precio: ${e.price}.00</Price>
              </PriceProduct>

              <AddProduct>
                <BtnAddCart
                  onClick={() => 
                    dispatch(addCartSync(e))
                  }
                >
                    <strong>Agregar al carrito</strong>
                    <IconCart>
                        <RiShoppingCart2Line />
                    </IconCart>
                </BtnAddCart>
              </AddProduct>
            </ContainerIngredients>
          ))
          
        }
      
      </>
        </ContainerPrincipal>
    )
}

export default MenuDay