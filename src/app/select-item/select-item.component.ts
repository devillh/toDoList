import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-item',
  templateUrl: './select-item.component.html',
  styleUrls: ['./select-item.component.css'],
})
export class SelectItemComponent {
  @Input() allItems: [string, boolean][] = [];
  @Output() updateItems: EventEmitter<[string, boolean][]> = new EventEmitter<
    [string, boolean][]
  >();

  selectAll = (): void => {
    this.allItems = this.allItems.map(([item, _]) => [item, true]);
    this.updateItems.emit(this.allItems);
  };

  unselectAll = (): void => {
    this.allItems = this.allItems.map(([item, _]) => [item, false]);
    this.updateItems.emit(this.allItems);
  };
}
