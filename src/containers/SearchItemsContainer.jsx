import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TopBar from "../components/TopBar/TopBar";
import { fetchDataAction } from "../redux/actions";
import Breadcrumb from "../components/Breadcrumb/BreadCrumb";
import ProductCard from "../components/ProductCard/ProductCard";
import { GeneralContainer, Container, EmptyRecords, ErrorContainer } from "./general.styled";

const SearchItemsContainer = ({ query }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const redirectFunction = (value) =>
    router.push({
      pathname: "/items",
      query: { search: value },
    });

  useEffect(() => {
    if (query) {
      dispatch(fetchDataAction(query));
    }
  }, [query]);

  const { items, error, categories } = useSelector((state) => state);

  const products = useMemo(() => {
    if (items.length > 0) {
      return items?.map((item) => <ProductCard key={item.id} {...item} />);
    } else {
      return <EmptyRecords>Sin resultados</EmptyRecords>;
    }
  }, [items]);

  return (
    <GeneralContainer>
      <TopBar onClick={redirectFunction} />
      <Breadcrumb categories={categories} />
      <Container>
        {products}
        {error && <ErrorContainer> {error} </ErrorContainer>}
      </Container>
    </GeneralContainer>
  );
};

SearchItemsContainer.propTypes = {
  query: PropTypes.string,
};

SearchItemsContainer.defaultProps = {
  query: null,
};

export default SearchItemsContainer;
