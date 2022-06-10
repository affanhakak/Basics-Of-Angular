import { IMenuItem } from './IMenuItem';

export interface IRestaurant {
  name: string;
  tagline: string;
  menuItems: IMenuItem[];
}

const restaurant: IRestaurant = {
  name: 'Amigos',
  tagline: 'Best pizza in town',
  menuItems: [
    {
      name: 'Normal Pizza',
      price: 22.2,
      category: 'Veg',
      imageUrl: 'assets/images/normal.png',
    },
    {
      name: 'Loaded Pizza',
      price: 23.2,
      category: 'Non-Veg',
      imageUrl: 'assets/images/loaded.png',
    },
  ],
};
