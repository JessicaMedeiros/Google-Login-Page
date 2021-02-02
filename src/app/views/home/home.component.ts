import { Component, OnInit } from '@angular/core';
import { Language } from "../../language";
import { LanguageService } from "../../language.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  languages: Language[];
  
  constructor(
      private service: LanguageService,

  ) { this.languages = this.service.getLanguages();   }

  
  ngOnInit(): void {

   

  }

}
