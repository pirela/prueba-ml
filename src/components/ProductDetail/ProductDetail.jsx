import PropTypes from 'prop-types';

import {
  DetailContainer,
  ContainerTitleShipping,
  PictureContainer,
  FreeShippingIcon,
  ProductCardContainer,
  DescriptionContainer,
} from './ProductDetail.styled';

const ProductDetail = ({
  title,
  price,
  picture,
  description,
  free_shipping,
}) => {
  return (
    <ProductCardContainer>
      <PictureContainer md={8} xs={12}>
        <img
          src={picture}
          className='product-picture'
        />
      </PictureContainer>
      <DetailContainer md={4} xs={12}>
        <ContainerTitleShipping>
          <div className='title'>{title}</div>
          {free_shipping && <FreeShippingIcon />}
        </ContainerTitleShipping>
        <div className='price'> {price?.currency} {price?.amount}</div>
      </DetailContainer>
      <DescriptionContainer xs={12}>
        <div className='title'>Descripción del Producto</div>
        <div>{description}</div>
      </DescriptionContainer>
    </ProductCardContainer>
  );
};

ProductDetail.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  free_shipping: PropTypes.bool,
  description: PropTypes.string
};

ProductDetail.defaultProps = {
  description: null,
};

export default ProductDetail;