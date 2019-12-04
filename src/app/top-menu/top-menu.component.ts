import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css'],
  // below ligne is commented as we want to overwrite inherited style (we ensure style encapsulation)
  // encapsulation: ViewEncapsulation.None
})
export class TopMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
