import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputText: string = '';
  hedefler: string[] = [];
  silinenler: string[] = [];
  isEditMode = false;

  addValue() {
    this.hedefler.push(this.inputText);
    this.inputText = '';
  }

  editItem(index: number) {
    this.inputText = this.hedefler[index];
    if (!this.isEditMode) this.isEditMode = true;
    else this.isEditMode = false;
  }

  deleteItem(index: number) {
    const item = this.hedefler[index];
    this.silinenler.push(item);
    this.hedefler.splice(index, 1);
  }
}
