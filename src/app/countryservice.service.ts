import { Injectable } from '@angular/core';
import { Country } from "./country";
@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {

  getCountries(){
    return[
      new Country(1, 'Afghanistan'),
      new Country(2, 'Albania'),
      new Country(3, 'Argentina'),
      new Country(4, 'Australia'),
      new Country(5, 'Austria'),
      new Country(6, 'Barbados'),
      new Country(7, 'Chile'),
      new Country(8, 'Chile'),
      new Country(9, 'China'),
      new Country(10, 'Cuba'),
      new Country(11, 'Croatia'),
      new Country(12, 'Denmark'),
      new Country(13, 'France'),
      new Country(14, 'United States of America'),
      new Country(15, 'Zambia')
    ]
  }
  constructor() { }
}
