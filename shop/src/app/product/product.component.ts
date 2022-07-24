import { Component, OnInit } from '@angular/core';
import { Product } from './product';
declare let alertify: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  title = 'Ürün Listesi';
  filterText = '';
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus Zenbook',
      imageUrl:
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    },
    {
      id: 1,
      name: 'Mouse',
      price: 25,
      categoryId: 2,
      description: 'A4 Tech',
      imageUrl:
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
    },
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus Zenbook',
      imageUrl:
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    },
    {
      id: 1,
      name: 'Mouse',
      price: 25,
      categoryId: 2,
      description: 'A4 Tech',
      imageUrl:
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
    },
    {
      id: 1,
      name: 'Laptop',
      price: 2500,
      categoryId: 1,
      description: 'Asus Zenbook',
      imageUrl:
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    },
    {
      id: 1,
      name: 'Mouse',
      price: 25,
      categoryId: 2,
      description: 'A4 Tech',
      imageUrl:
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  addToCard(product: Product) {
    alertify.success(product.name + ' added');
  }
}
