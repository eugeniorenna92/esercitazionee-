import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  @Output() refreshed = new EventEmitter<void>();

  ngOnInit(): void {}

  public clear() {
    this.refreshed.emit();
  }
}
