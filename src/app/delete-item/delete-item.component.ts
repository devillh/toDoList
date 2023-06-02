import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css'],
})
export class DeleteItemComponent {
  @Input() allItems: [string, boolean][] = [];
  @Output() updateItems: EventEmitter<[string, boolean][]> = new EventEmitter<
    [string, boolean][]
  >();

  deleteSelected = () => {
    this.allItems = this.allItems.filter(([_, selected]) => selected === false);
    this.updateItems.emit(this.allItems);
  };
}
