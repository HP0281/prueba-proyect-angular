import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaTecnica';
  constructor(private router: Router){

  }
  crear(){
    this.router.navigate(['/newRecovered']);
  }
}
