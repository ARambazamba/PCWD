import { Component, ViewEncapsulation } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'vouchers-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyC2NYIs--Ogvp3kGHZXyP7IT8JMnRfQlXM",
      authDomain: "angular-b2207.firebaseapp.com"
    })
  }
}
