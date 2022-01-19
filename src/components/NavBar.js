import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import UserData from '../hooks/dataUser';
import { Link } from "react-router-dom";
import { logout } from '../actions/actionLogin';
import { ContainerPrincipal, ImgLogo, LogoContainer, TextNegrita, ContainerAcount, TextPequenio } from '../styles/NavBar.elements';
//import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../index.css';

const NavBar = () => {

    const useUser = UserData();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout())
        navigate("/login")
    }

    return (
        <ContainerPrincipal>
          
            <LogoContainer>
                <Link to="/" className="links">
                    <ImgLogo src="https://res.cloudinary.com/silviajcn/image/upload/v1642618071/ONLINE%20SHOP%20%28prueba%20tecnica%203%29/OnlineShop_xau223.svg" alt="logo" />
                </Link>
            </LogoContainer>

            <TextNegrita><strong>Online Shop</strong></TextNegrita>

            <Link to="/login" className="links">
                <ContainerAcount>
                    <TextPequenio>
                        Hola, {
                              useUser.name!==undefined?useUser.name:" identifícate"
                              }
                    </TextPequenio>
                </ContainerAcount>
            </Link>

            <Link to="/login" className="links">
                <TextNegrita onClick={() => handleLogout()}>
                        {
                            useUser.name!==undefined?"Logout":" "
                        }
                </TextNegrita>
            </Link>
            
        </ContainerPrincipal>
    )
}

export default NavBar