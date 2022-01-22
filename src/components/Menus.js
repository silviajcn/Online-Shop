import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { ContainerPrincipal, Title, Containers, TitleProduct, ImgProduct, LinksBlue, ImgBandera } from '../styles/Menus.elements';
import { searchProductAsync, listCategoriesAsync } from '../actions/actionProducts';

const Menus = () => {

    const dispatch = useDispatch();

    let history = useNavigate();

    const { menus } = useSelector((store) => store.menus);
    //console.log(menus)

    useEffect(() => {
        dispatch(listCategoriesAsync());
    }, []);

    return (
        <div>
            <Title>Elige un Menu</Title>

            <ContainerPrincipal>
                {
                    menus.map((e, i) => (
                        <div key={i}>
                            <Containers id={e.id}>
                                <Link to="/productday" className="links">
                                    <div
                                    onClick={() => {
                                        dispatch(searchProductAsync(e.id))
                                        //history("/menuday")
                                    }}
                                    >
                                <TitleProduct>{e.namemenu}</TitleProduct>
                                <ImgBandera src={e.bandera} alt="nationality" />
                                <ImgProduct src={e.image} alt="..." />
                                <LinksBlue>Comprar ahora</LinksBlue>
                                </div>
                                </Link >
                            </Containers>
                        </div>
                    ))
               }
            </ContainerPrincipal>
            
        </div>
    )
}

export default Menus