import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  msg:string ="";
  msg1:string ="";


  addToCart(){
    this.msg = "product added in cart";
  }

  onClickInput(event){
    console.log(event.target.value);
  }

  addToCart1(event){
    this.msg1 = event.target.value + " added to cart";
  }


}
