import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: Array<any> = [];

  constructor() {
    this.items = [
      { name: 'assets/images/image1.jpg' },
      { name: 'assets/images/image2.jpg' },
      { name: 'assets/images/image3.jpg' },
      { name: 'assets/images/image4.jpg' },
      { name: 'assets/images/image5.jpg' },
      { name: 'assets/images/image1.jpg' },
      { name: 'assets/images/image2.jpg' },
      { name: 'assets/images/image3.jpg' },
      { name: 'assets/images/image4.jpg' },
      { name: 'assets/images/image5.jpg' }
    ]
  }
}
