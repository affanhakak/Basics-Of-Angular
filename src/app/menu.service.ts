import { Injectable } from '@angular/core';
import { IRestaurant } from './IRestaurant';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  getRestaurants(): IRestaurant[] {
    return [
      // {
      //   name: "Arthur shelby's bar",
      //   tagline: 'Non Veg Specials',
      //   menuItem: 'Mutton',
      //   category: 'stake',
      //   price: 45,
      //   imageUrl: 'assets/images/abc.jpg',
      // },
      // {
      //   name: "Tommy shelby's bar",
      //   tagline: 'Veg Specials',
      //   menuItem: 'Rice',
      //   category: 'boiled',
      //   price: 25,
      //   imageUrl: 'assets/images/def.jpg',
      // },
      // {
      //   name: "Johny shelby's bar",
      //   tagline: 'Vegan Specials',
      //   menuItem: 'Fruits',
      //   category: 'fresh',
      //   price: 15,
      //   imageUrl: 'assets/images/ghi.jpg',
      // },
    ];
  }
}
