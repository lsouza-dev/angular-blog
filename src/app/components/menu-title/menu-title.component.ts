import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-title',
  imports: [],
  templateUrl: './menu-title.component.html',
  styleUrl: './menu-title.component.css'
})
export class MenuTitleComponent {

  @Input() menuTitle!:string;
}
