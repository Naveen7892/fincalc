import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  $calcOptions: Array<object>;

  constructor() {
    this.$calcOptions = [
      {
        id: 1,
        title: 'Simple Interest',
        desc: 'Calculates simple interest',
        path: '/simple'
      },
      {
        id: 2,
        title: 'Compound Interest',
        desc: 'Calculates compound interest',
        path: '/compound'
      }
    ];
  }

  ngOnInit() {
  }

  goToPage(path) {
    console.log(path);
    
  }

}
