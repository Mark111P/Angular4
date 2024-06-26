import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  constructor (private loginService: UserService){}

  text: string;

  login: string;
  password: string;

  addUser(){
    if (this.login.length > 0 && this.password.length > 0){
      this.loginService.addUser(this.login, this.password).subscribe((data: any) => this.text = data["result"]);
    }
  }
  reset(){
    this.text = "";
  }

  getLogins(){
    this.loginService.getLogins().subscribe((data: any) => this.text = data.join("; "));
  }

  ngOnInit() {
  }
}
