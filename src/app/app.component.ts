import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'viaradnet';

  ngOnInit(){
    window.addEventListener("keyup", disableF5);
    window.addEventListener("keydown", disableF5);
  
   function disableF5(e:any) {
      if ((e.which || e.keyCode) == 116) e.preventDefault();
   }
  }
}
