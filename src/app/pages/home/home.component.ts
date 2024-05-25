import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private snack:MatSnackBar){}

  ngOnInit(): void {
  }

  btnclick(){
    console.log("btn-clicked");
    this.snack.open("Hey you clicked email button", "ok")
  }

}
