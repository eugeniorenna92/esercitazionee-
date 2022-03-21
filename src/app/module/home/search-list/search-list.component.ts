import { Gender } from './../../../models/Gender';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css'],
})
export class SearchListComponent implements OnInit {
  @Input() genderList!: Gender[];
  @Output() refreshed = new EventEmitter<Gender[]>();

  constructor() {}

  ngOnInit(): void {
    try {
      const storage = localStorage.getItem('genderList');
      if (storage != null) this.genderList = JSON.parse(storage);
    } catch (error) {
      console.error('Non ci sono dati salvati');
    }
  }

  public remove(gender: Gender) {
    this.genderList.splice(this.genderList.indexOf(gender), 1);
    localStorage.removeItem('genderList');
    localStorage.setItem('genderList', JSON.stringify(this.genderList));
    this.refreshed.emit(this.genderList);
  }

  public color(gender: Gender) {
    if (gender.count > 0.7) {
      return 'table-success';
    } else if (gender.count < 0.4) {
      return 'table-warning';
    } else {
      return 'table-danger';
    }
  }
}
