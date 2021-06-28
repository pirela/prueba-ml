export const serializeItem = (item) => ({
  id: item?.id,
  title: item?.title,
  picture: item?.thumbnail,
  condition: item?.condition,
  free_shipping: item?.shipping?.free_shipping,
  price: {
    amount: item?.price,
    currency: item?.prices?.presentation?.display_currency ||  item?.currency_id,
  }
});