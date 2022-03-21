import { Gender } from './../../../models/Gender';
import { GenderService } from './../gender.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-gender',
  templateUrl: './search-gender.component.html',
  styleUrls: ['./search-gender.component.css'],
})
export class SearchGenderComponent implements OnInit {
  public searchForm = this.formBuilder.group({
    name: ['', Validators.required],
  });
  @Input() genderList!: Gender[];

  @Output() refreshed = new EventEmitter<Gender[]>();

  constructor(
    private formBuilder: FormBuilder,
    private genderService: GenderService
  ) {}

  ngOnInit(): void {
    try {
      this.genderList = JSON.parse(localStorage.getItem('genderList') || '[]');
    } catch (error) {
      console.error('Non ci sono dati salvati');
    }
  }

  public search(): void {
    const date = new Date();
    this.genderService
      .getGender(this.searchForm.controls['name'].value)
      .subscribe((data) => {
        console.log(this.genderList);
        this.genderList.push({ ...data, date: date });
        localStorage.setItem('genderList', JSON.stringify(this.genderList));
      });

    this.refreshed.emit(this.genderList);
  }
}
