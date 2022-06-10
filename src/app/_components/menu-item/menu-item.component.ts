import { Component, Input } from '@angular/core';
import { IMenuItem } from 'src/app/IMenuItem';

@Component({
  selector: 'app-menu-item',
  template: `
    <div class="card">
      <img
        style="width: 200px; height: 200px; object-fit: contain;"
        [src]="menuItem?.imageUrl"
      />
      <div class="card-title">{{ menuItem?.name }}</div>
      <div class="card-body">
        <span
          >Price: {{ menuItem?.price }} | Category:
          {{ menuItem?.category }}</span
        >
      </div>
    </div>
  `,
  styles: [],
})
export class MenuItemComponent {
  @Input() menuItem?: IMenuItem;
}
