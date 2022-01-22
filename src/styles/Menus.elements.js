import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  display: grid;
  grid-template-columns: 220px 220px 220px;
  grid-template-rows: 220px 220px;
  column-gap: 10px;
  row-gap: 10px;
  background: rgba(245, 245, 245, 0.769);
  color: #000000;
  margin-top: 60px;
`

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  color: #333333;
  margin-left: 30px;
  margin-top: 20px;
`

export const Containers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100px;
  height: 140px;
  margin-left: 10px;
`

export const ImgProduct = styled.img`
  width: 160px;
  height: 160px;
  margin-top: 10px;
  margin-left: 20px;
`

export const ImgBandera = styled.img`
  width: 20px;
  margin-top: 0px;
  margin-left: 20px;
`

export const TitleProduct = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #333333;
  margin-left: 20px;
  margin-bottom: 0px;
`

export const LinksBlue = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #0E7184;
  margin-top: 0px;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
  }
`