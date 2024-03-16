import { renderListWithTemplate } from './utils.mjs';
  
function productCardTemplate(product) {
    return `<li class="product-card">
      <a href="product_pages/index.html?product=">
        <img src="" alt="Image of ">
        <h3 class="card__brand"></h3>
        <h2 class="card__name"></h2>
        <p class="product-card__price">$</p>
      </a>
    </li>`
  }

export default class ProductListing {
    constructor(category, dataSource, listElement) {
      this.category = category;
      this.dataSource = dataSource;
      this.listElement = listElement;
      }

    async init() {
        const productList = await this.dataSource.getData();
        const filteredList = this.filterProducts(productList);
        this.renderList(filteredList);
    }

    renderList(products) {
        const productCards = products.map(product => productCardTemplate(product)).join('');
        this.listElement.innerHTML = productCards;
      }

    renderList(products) {
        renderListWithTemplate(productCardTemplate, this.listElement, products);
      }

    filterProducts(products) {
        const filteredProducts = products.filter(product => {
          return product.Brand.Name === "Marmot" || product.Brand.Name === "The North Face";
        });
        return filteredProducts;
    }
}
