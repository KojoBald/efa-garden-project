import { Component, OnInit } from '@angular/core';
import _debounce from 'lodash.debounce'

const ITEMS_PER_PAGE = 10;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<any> = [];
  numPages: number = 0;
  pageNumbers: Array<number> = [];
  currentPage: number = 0;
  pageProducts: Array<any> = [];

  ngOnInit() {
    fetch('https://efa-gardenapp-backend.herokuapp.com/api/product')
      .then(response => response.json())
      .then(json => {
        this.products = json;
        this.numPages = Math.ceil(this.products.length / ITEMS_PER_PAGE);
        this.changePage();
      })
  }

  changePage() : void {
    this.pageProducts = this.products.slice(this.currentPage * ITEMS_PER_PAGE, (this.currentPage + 1) * ITEMS_PER_PAGE);
  }

  nextPage() {
    if((this.currentPage + 1) < this.numPages) {
      this.currentPage++;
      this.changePage();
    }
  }

  previousPage() {
    if((this.currentPage - 1) > -1) {
      this.currentPage--;
      this.changePage();
    }
  }

  search = _debounce((event) => {
    let query: string = event.target.value;
    if(query === '') {
      return this.changePage();
    }
    let searchResults: Array<any> = [];
    for(let i = 0; i < this.products.length; i++) {
      let product = this.products[i];
      if(product.id.toString().includes(query)) {
        searchResults.push(product)
      } else if(product.product_name.includes(query)) {
        searchResults.push(product)
      }
    }
    this.pageProducts = searchResults;
  }, 500)
}