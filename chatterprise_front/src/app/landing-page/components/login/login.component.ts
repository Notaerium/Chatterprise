import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  firstname!: string
  lastname!: string
  email!: string
  companyName!: string
  password!: string

  constructor(){}

  ngOnInit(): void {
    
  }
}
