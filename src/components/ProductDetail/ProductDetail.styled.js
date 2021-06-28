
import styled from 'styled-components';
import { Row, Col } from 'react-styled-flexboxgrid';

export const ProductCardContainer = styled(Row)`
  padding: 40px;
`;

export const ContainerTitleShipping = styled.div`
  display: flex;
`;

export const PictureContainer = styled(Col)`
  img.product-picture {
    width: 100%;
    height: auto;
  }
`;

export const DetailContainer = styled(Col)`
  display: block;
  font-family: Helvetica;
  .title {
    max-width: 90%;
    font-weight: 600;
  }
  .price {
    margin: 12px 0px;
    font-size: 14px;
  }
`;

export const FreeShippingIcon= styled.div`
  background-image: url(${({ theme }) => theme.assets.freeShippingIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 28px;
  width: 40px;
  height: 40px;
`;

export const DescriptionContainer = styled(Col)`
  display: block;
  font-size: 16px;
  .title {
    font-size: 14px;
    font-weight: 600;
    margin: 16px 0;
  }
`;


