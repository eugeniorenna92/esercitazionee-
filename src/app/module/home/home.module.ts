import { SharedModule } from './../../shared/shared.module';
import { HomeComponent } from './home.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchGenderComponent } from './search-gender/search-gender.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SearchGenderComponent, SearchListComponent, HomeComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule, HttpClientModule],
})
export class HomeModule {}
