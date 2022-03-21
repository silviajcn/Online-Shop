import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { logout } from '../actions/actionLogin';
import { ContainerPrincipal, ImgLogo, LogoContainer, TextNegrita, ContainerAcount, TextPequenio, ContainerCar, BtnCar, LinksMenu } from '../styles/NavBar.elements';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../index.css';

const NavBar = () => {

    //USER
    const { name } = useSelector(state => state.login)

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    React.useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (name) => {
            if (name?.uid) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
    }, [setIsLoggedIn]);


    //LOGOUT
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }


    //PRODUCTS IN CART
    const { cart } = useSelector((store) => store.shopping);

    const totalItems = () => {
        const reducer = (counter, currentValue) => counter + currentValue.quantity
        const add = cart.reduce(reducer, 0)
        
        return add
    }

    return (
        <ContainerPrincipal>
          
            <LogoContainer>
                <Link to="/" className="links">
                    <ImgLogo src="https://res.cloudinary.com/silviajcn/image/upload/v1642618071/ONLINE%20SHOP%20%28prueba%20tecnica%203%29/OnlineShop_xau223.svg" alt="logo" />
                </Link>
            </LogoContainer>

            {/* <Link to="/productday" className="links-two">
                <TextNegrita>
                    <strong>Ver plato del día</strong>
                </TextNegrita>
            </Link> */}

            <Link to="/login" className="links">
                <ContainerAcount>
                    { isLoggedIn ? (
                        <TextPequenio onClick={() => handleLogout()}>
                            Hola, {name}
                        </TextPequenio>
                    ) : (
                        <TextPequenio>
                            Hola, Identifícate
                        </TextPequenio> 
                    )}
                </ContainerAcount>
            </Link>

            

            <ContainerCar>
                <BtnCar>
                    <ShoppingCartOutlinedIcon />
                    <LinksMenu>{totalItems()}</LinksMenu>
                </BtnCar>
            </ContainerCar>

            <Link to="/login" className="links-two">
                <ContainerAcount>
                    { isLoggedIn ? (
                        <TextPequenio onClick={() => handleLogout()}>
                            Logout
                        </TextPequenio>
                    ) : (
                        <TextPequenio>
                            
                        </TextPequenio> 
                    )}
                    
                </ContainerAcount>
            </Link>
            
        </ContainerPrincipal>
    )
}

export default NavBar