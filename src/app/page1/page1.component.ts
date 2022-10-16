import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title="...page1 is ready to go!"
  clickme()
  {
    const service=new myservice;
    service.Onclickbtn(this.title);
  }

}
