import styled from "styled-components";
import { Button, Form, FormControl} from "react-bootstrap";

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
  font-weight: 900;
  font-size: 22px;
  color: #000000;
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

//btn
export const BtnSearch = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: pink;
  border: none;
  border-radius: 0px 3px 3px 0px;
  width: 48px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    margin-right: 0px;
  }
`

// Acount -----------------------------------------------------------------------------------------------
export const ContainerAcount = styled.div`
  display: flex;
  flex-direction: column;
  color: #000000;
  margin-right: 30px;
  border: 1px solid #131921;
  border-radius: 2px;
  padding: 3px;
  margin-left: 880px;
  &:hover {
    border: 1px solid #fff;
    cursor: pointer;
  }
`

export const TextPequenio = styled.span`
  margin: 0px;
  font-size: 12px;
`