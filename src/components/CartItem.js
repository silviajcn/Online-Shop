import React from 'react';
import { deleteCartSync, clearCartSync } from '../actions/actionShopping';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Container, ContainerItems, Titleproduct, NullProducts, ContainerBtns, BtnClear, BtnDeleteOne, BtnDeleteAll, BtnAddPurchase, ContainerBtnCompra, ContainerTotal, CostoDelivery, ContainerCuentas, Precios, PriceTotal, Logo, NameProduct } from '../styles/Cart.elements';

//MUI
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "#BAFFB4",
  border: '2px solid #000',
  p: 2,
  px: 4,
  pb: 3
};



const CartItem = () => {

  const dispatch = useDispatch();
  
  const { cart } = useSelector((store) => store.shopping);

  //
  const TotalPrice = () => {
      const reducer = (counter, currentValue) => counter + (currentValue.price * currentValue.quantity + 7)
      const add = cart.reduce(reducer,0)
      return add
  }

  const sumTotal = () => {
    const reducer = (counter, currentValue) => counter + currentValue.quantity
    const add = cart.reduce(reducer,0)
    return add
  }

    //MUI
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
   
  
    return (
      
    <Container>

        <PriceTotal>
            Total a pagar: <strong>{TotalPrice()}.00</strong> $
        </PriceTotal>

        <p>Cantidad de items: {sumTotal()}</p>

        

        {cart.length === 0 ?
          <NullProducts>No hay productos en el carrito</NullProducts>
          :
          <ContainerBtnCompra>
            <BtnAddPurchase onClick={handleOpen}>
          <strong>Comprar ingredientes:</strong>
          <ContainerTotal>
            <strong>{TotalPrice()}.00</strong> $
          </ContainerTotal>
            </BtnAddPurchase>

            <BtnClear onClick={() => dispatch(clearCartSync())}><strong>Limpiar Carrito</strong></BtnClear>
            

            {/* MUI */}
        <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h2 id="unstyled-modal-title">¡Compra exitosa!</h2>
          <p>Tu pedido llegará en 20 minutos</p>
          <p id="unstyled-modal-description">Haz click en el logo de nuestra tienda y recibe un regalo por tu compra:</p>
          <Link to="/gift">
            <Logo src="https://res.cloudinary.com/silviajcn/image/upload/v1642618071/ONLINE%20SHOP%20%28prueba%20tecnica%203%29/OnlineShop_xau223.svg" alt="logo" />
          </Link>
          
        </Box>
      </StyledModal>
          </ContainerBtnCompra>  
        }

        
        <div>
          {
              cart.map((prod) => (
                <ContainerItems key={prod.id}>
                  <Titleproduct>{prod.product}</Titleproduct>
                  
                  <ContainerCuentas>
                    <Precios>Precio del producto: <strong>{prod.price}</strong>.00 $</Precios>
                  <CostoDelivery>
                      Nuestro envio a domicilio tiene un costo de : <strong>7.00 $</strong>
                  </CostoDelivery>
                  
                  <Precios>Precio por cantidad: {prod.price} x {prod.quantity} = <strong>{prod.price * prod.quantity }</strong>.00 $</Precios>
                  </ContainerCuentas>

                  <ContainerBtns>
                    <BtnDeleteOne type="button" onClick={()=> dispatch(deleteCartSync(prod.id))}>Eliminar producto</BtnDeleteOne>
                    <BtnDeleteAll type="button" onClick={()=> dispatch(deleteCartSync(prod.id, true))}>Eliminar todos los productos</BtnDeleteAll>
                  </ContainerBtns>
                </ContainerItems>
              ))
          }
        </div>       
          
    </Container>
        
  );
};

export default CartItem;