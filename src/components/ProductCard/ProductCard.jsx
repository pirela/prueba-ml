import Link from 'next/link';
import PropTypes from 'prop-types';

import {
  ContainerPriceShipping,
  StatusContainer,
  PictureContainer,
  FreeShippingIcon,
  ProductCardContainer,
  DescriptionContainer,
} from './ProductCard.styled';

const ProductCard = ({
  id,
  title,
  price,
  picture,
  condition,
  free_shipping,
}) => {
  return (
    <Link href={`/items/${id}`}>
      <ProductCardContainer>
        <PictureContainer md={2} xs={12}>
          <img
            src={picture}
            className='product-picture'
          />
        </PictureContainer>
        <DescriptionContainer md={8} xs={12}>
          <ContainerPriceShipping>
            <div className='price'>{price.currency} {price.amount}</div>
            {free_shipping && <FreeShippingIcon />}
          </ContainerPriceShipping>
          <div className='title'>{title}</div>
        </DescriptionContainer>
        <StatusContainer md={2} xs={12}>
          <div>Condición: {condition}</div>
        </StatusContainer>
      </ProductCardContainer>
    </Link>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.shape({
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  condition: PropTypes.string.isRequired,
  free_shipping: PropTypes.bool,
};

ProductCard.defaultProps = {
  free_shipping: false
};

export default ProductCard;
