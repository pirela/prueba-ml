const defaultTheme = {
  colors: {
    primary: '#FFF159',
    secondary: '#EEEEEE',
  },
  assets: {
    MLLogo: 'https://assets.entrepreneur.com/content/3x2/2000/20200317230533-MercadoLibre1.jpeg',
    searchIcon: 'https://cdn.iconscout.com/icon/free/png-256/search-2235191-1872847.png',
    freeShippingIcon: 'https://www.vhv.rs/dpng/d/527-5274614_20-shipping-on-all-orders-for-canadian-customers.png'
  },
  flexboxgrid: {
    gridSize: 12,
    gutterWidth: 1,
    outerMargin: 1,
    mediaQuery: 'only screen',
    container: {
      sm: 46,
      md: 61,
      lg: 76
    },
    breakpoints: {
      xs: 0,
      sm: 48,
      md: 64,
      lg: 75
    }
  }
}

export default defaultTheme;