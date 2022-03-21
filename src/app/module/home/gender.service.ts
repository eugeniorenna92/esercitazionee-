import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from 'src/app/models/Gender';

@Injectable({
  providedIn: 'root',
})
export class GenderService {
  constructor(private httpClient: HttpClient) {}

  public getGender(name: string): Observable<Gender> {
    return this.httpClient.get(
      'https://api.genderize.io/?name=' + name
    ) as Observable<Gender>;
  }
}
