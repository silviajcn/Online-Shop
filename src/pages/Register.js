import React from 'react';
import { useForm } from '../hooks/useForm';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerEmailPasswordName } from '../actions/actionRegister';
import { ContainerPrincipal, LogoContainer, Logo, ContainerForm, ContainerInputs, Labels, Inputs, BtnContinue, Pconditions, RegisterRedirect, Predirect, PredirectLogin } from '../styles/Register.elements';

const Register = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        name: 'Silvi',
        email: 'silvi@gmail.com',
        pass1: '123456789',
        pass2: '123456789'
    });

    const { name, email, pass1, pass2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerEmailPasswordName(email, pass1, name))
    }
    
    return (
        <ContainerPrincipal>

            <LogoContainer>
                <Logo src="https://res.cloudinary.com/silviajcn/image/upload/v1642618071/ONLINE%20SHOP%20%28prueba%20tecnica%203%29/OnlineShop_xau223.svg" />
            </LogoContainer>

            <ContainerForm>
                <form onSubmit={handleRegister}>

                    <div>
                        <h2>Crear cuenta en Online Shop</h2>
                    </div>
                    
                    <ContainerInputs>
                        <Labels>Tu nombre</Labels>
                        <Inputs
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleInputChange}
                        />
                    </ContainerInputs>

                    <ContainerInputs>
                        <Labels>Correo electrónico</Labels>
                        <Inputs
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </ContainerInputs>

                    <ContainerInputs>
                        <Labels>Contraseña</Labels>
                        <Inputs
                            type="password"
                            placeholder="Como mínimo 6 caracteres"
                            name="pass1"
                            value={pass1}
                            onChange={handleInputChange}
                        />
                    </ContainerInputs>

                    <ContainerInputs>
                        <Labels>Vuelve a escribir la contraseña</Labels>
                        <Inputs
                            type="password"
                            name="pass2"
                            value={pass2}
                            onChange={handleInputChange}
                        />
                    </ContainerInputs>

                    <BtnContinue type="submit">
                        Crea tu cuenta de Online Shop
                    </BtnContinue>

                    <div>
                        <Pconditions>Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de Online Shop.</Pconditions>
                    </div>

                </form>

                <RegisterRedirect>
                    <Predirect>¿Ya tienes una cuenta en Online Shop?</Predirect>
                    <Link to="/login" className="links">
                        <PredirectLogin>Iniciar sesión</PredirectLogin>
                    </Link>
                </RegisterRedirect>
                
            </ContainerForm>
        </ContainerPrincipal>
    )
}

export default Register
