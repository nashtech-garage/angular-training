import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'rcp-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
