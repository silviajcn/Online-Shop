import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background: #fff;
  color: #000000;
  margin: 0px 0px 50px 0px;
  width: 100%;
  height: 600px;
  padding: 0px;
  margin-bottom: 150px;
`

export const ContainerIngredients = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #BAFFB4;
  color: #000000;
  border-bottom: 1px solid gray;
  height: 100px;
`

export const ImgProduct = styled.img`
  border-radius: 50%;
  width: 50px;
  margin-left: 20px;
`

export const DataProduct = styled.div`
  margin: 5px 40px 5px 50px;
  padding: 0px;
  width: 230px;
`

export const NameProduct = styled.h2`
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 0px;
  font-size: 18px;
`

export const BrandProduct = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 0px;
  font-size: 14px;
`

export const PriceProduct = styled.div`
  margin: 0px 40px 0px 50px;
  padding: 0px;
  width: 152px;
`

export const Price = styled.h3`
  margin-bottom: 0px;
  margin-top: 0px;
  padding: 0px;
  font-size: 20px;
`

export const AddProduct = styled.div`
  margin: 0px 40px 0px 50px;
  padding: 0px;
`

export const BtnAddCart = styled.button`
  background: #2FDD92;
  border: 1px solid #000000;
  border-radius: 2px;
  padding: 5px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const IconCart = styled.div`
  margin-left: 5px;
`