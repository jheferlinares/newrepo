import ProductData from './ProductData.mjs';
import ProductListing from './ProductList.mjs';


const dataSource = new ProductData('tents');
const productListElement = document.getElementById('productList');
const productListing = new ProductListing('tents', dataSource, productListElement);

productListing.init();