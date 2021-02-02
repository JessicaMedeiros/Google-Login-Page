import { Component, OnInit } from '@angular/core';
import { Country } from "../../country";
import { CountryserviceService } from "../../countryservice.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  countries: Country[];
  
  constructor(
      private service: CountryserviceService,

  ) { this.countries = this.service.getCountries();   }

  
  ngOnInit(): void {

   

  }

}
