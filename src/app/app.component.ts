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
  sayi:string = "45";
  parentHeader: string = "300";

  readButtonEvent(event:string){
    console.log(event);
    
  }

  changeName() {
    this.parentHeader += 1;
  }

  showMessage(event:any){
    console.log(event)
    // this.parentHeader = event.toString();
  }

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
