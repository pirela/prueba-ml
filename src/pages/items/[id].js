import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState, useCallback } from 'react';

import { useSelector } from "react-redux";

import { serializeItem } from '../../api/serializers';
import { fetchProduct, fetchProductDescription } from '../../api';
import ItemDetailContainer from '../../containers/ItemDetailContainer';

const Detail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);

  const { categories } = useSelector((state) => state);

  const fetchData = useCallback(async () => {
    if (id) {
      try {
        const [apiProduct, apiDescription] = await Promise.all([
          fetchProduct(id),
          fetchProductDescription(id)
        ]);
        setProduct({
          ...serializeItem(apiProduct),
          description: apiDescription?.plain_text
        });
      } catch (error) {
        setError(error.message);
      }
    }

  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      {product && (
        <Head>
          <title>{`ML Frontend Test - ${product.title}`}</title>
          <meta name={product.title} content={product.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      )}
      <ItemDetailContainer
        error={error}
        product={product}
        categories={categories}
      />
    </>
    );
};


export default Detail;