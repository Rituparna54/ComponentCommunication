import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Component Communication';
  childData: string="";

  catchChildEvent($event : string){
    this.childData = $event;
  }
}
