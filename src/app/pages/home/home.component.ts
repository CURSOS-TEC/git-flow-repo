import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  data: { title: string, body: string };
  constructor() { 
    this.data = { title: "Hello",  body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore nostrum architecto quibusdam earum odit corporis, obcaecati nesciunt ipsum officiis quae optio, aperiam dignissimos. Rerum rem numquam sit et, sint ut."}
  }

  ngOnInit() {
  }

}
