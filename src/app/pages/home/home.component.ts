import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rcp-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
