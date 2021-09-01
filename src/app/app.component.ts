import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WaterWorld';

  constructor(private router:Router) { }


goToInventoryOptions()
  {
    this.router.navigate(['/inventory-options']);
  }
}

