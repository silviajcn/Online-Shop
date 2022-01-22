import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  color: #000000;
  width: 410px;
  margin-left: 30px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #BAFFB4;
  color: #000000;
  width: 410px;
`

export const NullProducts = styled.p`
  background: #fff;
  color: #000000;
  padding: 10px;
  width: 300px;
  text-align: center;
`

export const BtnClear = styled.button`
  background: #FF9999;
  border: 1px solid #000000;
  border-radius: 2px;
  padding: 5px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  width: 350px;
  margin-left: 5px
`

export const CostoDelivery = styled.p`
  color: #000000;
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 2px;
`

export const Precios = styled.p`
  color: #000000;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: 0px;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border-bottom: 1px solid gray;
  width: 370px;
`

export const ContainerBtnCompra = styled.div`
  border-bottom: 1px solid gray;
`

export const Titleproduct = styled.h4`
  font-size: 18px;
  margin: 5px 0px;
`

export const PriceTotal = styled.h4`
  font-size: 25px;
  margin: 20px 30px 20px 30px;
`

export const ContainerCuentas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 10px;
`

export const BtnAddPurchase = styled.button`
  background: #2FDD92;
  border: 1px solid #000000;
  border-radius: 2px;
  padding: 5px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  width: 350px;
  font-size: 20px;
  margin-left: 5px
`

export const ContainerTotal = styled.div`
  margin-left: 10px;
`

export const ContainerBtns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 10px;
`

export const BtnDeleteOne = styled.button`
  color: #000000;
  border: 1px solid #000000;
  border-radius: 3px;
  margin-bottom: 5px;
  width: 190px;
  &:hover {
    cursor: pointer;
    background: #FF9999;
  }
`

export const BtnDeleteAll = styled.button`
  color: #000000;
  border: 1px solid #000000;
  border-radius: 3px;
  width: 190px;
  &:hover {
    background: #FF9999;
    cursor: pointer;
  }
`

export const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-left: 150px;
  &:hover {
    cursor: pointer;
  }
`