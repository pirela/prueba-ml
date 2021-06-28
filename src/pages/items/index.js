import Head from 'next/head';
import { useRouter } from 'next/router';
import SearchItems from '../../containers/SearchItemsContainer';

const Items = () => {
  const router = useRouter();
  const { search } = router.query;

   return (
    <>
      <Head>
        <title>Prueba mercado libre - Buscar item</title>
        <meta name="Buscar item" content="Buscar item" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchItems query={search} />
    </>
  )
}


export default Items;