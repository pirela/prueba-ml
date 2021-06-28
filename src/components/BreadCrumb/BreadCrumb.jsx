
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  CategoryName,
  BreadCrumbContainer
} from './BreadCrumb.styled';


const BreadCrumb = ({ categories }) => {

  const renderCategories = useMemo(() => (
    categories?.map((category, index) =>
      <CategoryName
        className='category'
        key={category.id}
        next={index < (categories.length - 1)}
      >
        {category.name}
      </CategoryName>)
  ), [categories]);

  return (
    <BreadCrumbContainer>
      {renderCategories}
    </BreadCrumbContainer>
  );
};

BreadCrumb.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

BreadCrumb.defaultProps = {
  categories: []
};

export default BreadCrumb;