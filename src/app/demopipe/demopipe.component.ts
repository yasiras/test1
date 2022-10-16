import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipe',
  templateUrl: './demopipe.component.html',
  styleUrls: ['./demopipe.component.css']
})
export class DemopipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title="bangalore";
today=Date();
user={
  id:100,
  name:"steve",
  dob:'10-12-22',
salary:1000}
}
