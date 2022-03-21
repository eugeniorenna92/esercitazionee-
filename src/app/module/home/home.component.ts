import { Gender } from 'src/app/models/Gender';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  genderList!: Gender[];

  constructor() {}

  ngOnInit(): void {}

  public refresh(genderList: Gender[]) {
    this.genderList = genderList;
  }

  public delete() {
    localStorage.removeItem('genderList');
    this.genderList = [];
  }
}
