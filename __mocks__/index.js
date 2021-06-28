export const categories = [
  {
    id: 'MLA1648',
    name: 'Computación'
  },
  {
    id: 'MLA430687',
    name: 'Laptops y Accesorios'
  }
];

export const item = {
  condition: "new",
  free_shipping: false,
  id: "MLA913503991",
  picture: "http://http2.mlstatic.com/D_790874-MLA44939295335_022021-I.jpg",
  price: { amount: 104499, currency: "ARS" },
  title: "Notebook Dell Inspiron 3505 Gris 15.6 , Amd Ryzen 5 3450u  8gb De Ram 256gb Ssd, Amd Radeon Vega 8 1366x768px Windows 10 Home",
  description: 'Notebook Dell Inspiron 3505 Gris 15.6 , Amd Ryzen 5 3450u  8gb De Ram 256gb Ssd, Amd Radeon Vega 8 1366x768px Windows 10 Home'
}

export const initialState = {
  author: {
    name: 'Jose',
    lastname: 'Pirela'
  },
  items: [],
  categories,
  error: null
}

