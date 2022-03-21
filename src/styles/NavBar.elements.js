import styled from "styled-components";
import { Form, FormControl} from "react-bootstrap";

export const ContainerPrincipal = styled.div`
  width: 100%;
  height: 64px;
  background-color: #BAFFB4;
  display: flex;
  flex-direction: row;
  justify-content: inline-flex;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-left: 20px;
  @media screen and (max-width: 968px) {
    margin-left: 40px;
  }
`

export const ImgLogo = styled.img`
  width: 80px;
  height: auto;
  @media screen and (max-width: 850px) {
    margin-bottom: 0px;
    width: 120px;
  }
`

export const TextNegrita = styled.p`
  margin: 0px;
  font-size: 14px;
  color: #000000;
  border: 1px solid #BAFFB4;
  border-radius: 2px;
  padding: 3px;
  &:hover {
    border: 1px solid #000000;
    cursor: pointer;
  }
`



// SearchInput -----------------------------------------------------------------------------------------------
export const ContainerBuscador = styled.div`
  width: 600px;
  @media screen and (max-width: 968px) {
    margin-right: 30px;
  }
`

//form
export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const InputSearch = styled(FormControl)`
  width: 500px;
  height: 40px;
  border-radius: 2px 0px 0px 2px;
  border: none;
  padding: 0px 0px 0px 5px;
  @media screen and (max-width: 900px) {
    width: 400px;
  }
`


// Acount -----------------------------------------------------------------------------------------------
export const ContainerAcount = styled.div`
  display: flex;
  flex-direction: column;
  color: #000000;
  margin-right: 30px;
  border: 1px solid #BAFFB4;
  border-radius: 2px;
  padding: 3px;
  margin-left: 10px;
  &:hover {
    border: 1px solid #000000;
    cursor: pointer;
  }
`

export const TextPequenio = styled.p`
  margin: 0px;
  font-size: 14px;
`




//Cart-------------------------------
export const ContainerCar = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #BAFFB4;
  border-radius: 2px;
  padding: 3px;
  margin-left: 980px;
  &:hover {
    border: 1px solid #000000;
    cursor: pointer;
  }
`

export const BtnCar = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 3px;
  height: 30px;
  background: none;
  svg {
      fill: #000000;
      font-size: 30px;
    }
`

export const LinksMenu = styled.p`
  font-size: 15px;
  font-weight: 700;
  color: #000000;
  margin-top: 30px;
`