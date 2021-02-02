import { Injectable } from '@angular/core';
import { Language } from "./language";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  getLanguages(){
    return[
      new Language(1, 'Afghanistan'),
      new Language(2, 'Albania'),
      new Language(3, 'Argentina'),
      new Language(4, 'Australia'),
      new Language(5, 'Austria'),
      new Language(6, 'Barbados'),
      new Language(7, 'Chile'),
      new Language(8, 'Chile'),
      new Language(9, 'China'),
      new Language(10, 'Cuba'),
      new Language(11, 'Croatia'),
      new Language(12, 'Denmark'),
      new Language(13, 'France'),
      new Language(14, 'United States of America'),
      new Language(15, 'Zambia')
    ]
  }

  constructor() { }
}
