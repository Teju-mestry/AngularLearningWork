import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  classshow:boolean = true;

  mystyle = "10px";

  apStyle:boolean = false;

  myclasses= {
    class1:true,
    class2:true,
    class3:true

  }

  multistyle= { 'background': 'red',
  'border':'2px solid green' };

}
