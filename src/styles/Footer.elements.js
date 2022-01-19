import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #BAFFB4;
  color: #000000;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`

export const Logo = styled.img`
  width: 100px;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`

export const Credits = styled.p`
  font-size: 11px;
  margin-bottom: 20px;
`