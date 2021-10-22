import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyDiC-u5rOxllbN6sdS3U8CWiQSDGWqf8ek",
      authDomain: "comprasapp-5b156.firebaseapp.com",
      databaseURL: "https://comprasapp-5b156-default-rtdb.firebaseio.com",
      projectId: "comprasapp-5b156",
      storageBucket: "comprasapp-5b156.appspot.com",
      messagingSenderId: "417531591953",
      appId: "1:417531591953:web:524819e58733525c08a0b0"
    })
  }

}
