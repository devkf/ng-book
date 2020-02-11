import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyAl0-1S180cyvme9AemnAcbBcsAlFtDVWc',
      authDomain: 'ng-livre.firebaseapp.com',
      databaseURL: 'https://ng-livre.firebaseio.com',
      projectId: 'ng-livre',
      storageBucket: 'ng-livre.appspot.com',
      messagingSenderId: '839865323869',
      appId: '1:839865323869:web:57500b9578a4a510be18b4'
    };
    firebase.initializeApp(config);
  }
}
