import { Component } from '@angular/core';
import {AppLib} from '../app-core/lib';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-neu';
}

let appLib = new AppLib();

let myapp: any = {
    myfunction : function () { }
};

Neutralino.init({
  load: function() {
      myapp.myfunction();
      appLib.showSettings();
      
  },
  pingSuccessCallback : function() {

  },
  pingFailCallback : function() {

  }
});

