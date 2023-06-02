import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule } from '@angular/forms';
import { SelectItemComponent } from './select-item/select-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';

@NgModule({
  declarations: [AppComponent, ListComponent, AddItemComponent, SelectItemComponent, DeleteItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
