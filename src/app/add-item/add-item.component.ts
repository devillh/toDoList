import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent {
  newItem: string = '';
  @Output() newItemChange: EventEmitter<string> = new EventEmitter<string>();

  addNewItem = () => {
    this.newItemChange.emit(this.newItem);
    this.newItem = '';
  };
}
