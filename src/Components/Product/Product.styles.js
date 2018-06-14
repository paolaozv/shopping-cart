import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: inline-block;
  padding-top: 100%;
  position: relative;
  min-width: 220px;
  margin: 0 1em;
`;

export const ContainerImg = styled.div`
  position: absolute;
  z-index: -1;
  top: -75px;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ImgProduct = styled.img`
  max-width: 100%;
  max-height: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
`;

export const Description = styled.div`
  width: 100%;
  text-align: center;
`;

export const ContainerButton = styled.div`
  text-align: center;
`;