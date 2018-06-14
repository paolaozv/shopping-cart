import React from 'react';
import { ProductContainer, ContainerImg, ImgProduct, Description } from './Product.styles';

export const Product = (props) => {
  return <ProductContainer>
    <ContainerImg>
      <ImgProduct src={props.product.product_image} alt={props.product.product_name} />
    </ContainerImg>
    <Description>
      <p>{props.product.product_category}</p>
      <p>{props.product.product_name}</p>
      <p>{props.product.product_color}</p>
      <p>S/. {props.product.product_price}</p>
    </Description>
  </ProductContainer>
};