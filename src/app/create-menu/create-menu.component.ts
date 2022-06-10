import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../IMenuItem';
import { IRestaurant } from '../IRestaurant';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css'],
})
export class CreateRestaurantComponent {
  restaurant: IRestaurant = emptyRestaurant;
  tempMenuItem: IMenuItem = emptyMenuItem;
  isAddingMenuItem = false;
  constructor() {
    const restuarantStr = localStorage.getItem('restaurant');
    if (restuarantStr) {
      this.restaurant = JSON.parse(restuarantStr);
    }
  }
  onCreate() {
    console.log(this.restaurant);
    window.localStorage.setItem('restaurant', JSON.stringify(this.restaurant));
    alert('Restaurant Saved');
  }
  onAddMenuItem() {
    this.isAddingMenuItem = true;
  }
  onSaveMenuItem() {
    console.log(this.tempMenuItem);
    this.restaurant.menuItems = [
      ...this.restaurant.menuItems,
      { ...this.tempMenuItem },
    ];
    this.tempMenuItem.category = '';
    this.tempMenuItem.name = '';
    this.tempMenuItem.price = 0;
    this.tempMenuItem.imageUrl = '';

    this.isAddingMenuItem = false;
    console.log(this.restaurant);
  }
  onCancelAdding() {
    this.tempMenuItem = emptyMenuItem;
    this.isAddingMenuItem = false;
  }
}

const emptyRestaurant: IRestaurant = {
  name: '',
  tagline: '',
  menuItems: [],
};

const emptyMenuItem: IMenuItem = {
  name: '',
  category: '',
  imageUrl: '',
  price: 0,
};
