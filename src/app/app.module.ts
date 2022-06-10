import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { CreateRestaurantComponent } from './create-menu/create-menu.component';

import { MenuService } from './menu.service';
import { MealsComponent } from './meals/meals.component';
import { MenuItemComponent } from './_components/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ThumbnailComponent,
    CreateRestaurantComponent,
    MealsComponent,
    MenuItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: ThumbnailComponent },
      { path: 'menus', component: CreateRestaurantComponent },
      { path: 'meals', component: MealsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]),
  ],
  providers: [MenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
