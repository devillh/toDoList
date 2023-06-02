import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  items: [string, boolean][] = [
    ['Item 1', false],
    ['Item 2', false],
  ];

  addNewItem = (newItem: string): void => {
    this.items.push([newItem, false]);
  };

  updateItem = (index: number, selected: boolean): void => {
    this.items[index][1] = selected;
  };

  updateList = (itemsList: [string, boolean][]) => {
    this.items = itemsList;
  };
}
