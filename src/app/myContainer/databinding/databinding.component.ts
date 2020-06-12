import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string = "Sai";

  myFunction(){
      return "Tejashree";
  }

  appStatus:boolean = false;

  status1 = "Online";
  status2 = "Offline";


  enable:boolean = false;
}
