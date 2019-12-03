import { Component, OnInit } from '@angular/core';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { AddressDTO } from 'src/app/shared-data/address-dto';
import { DirectorDTO } from 'src/app/shared-data/director-dto';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {
  name = 'mon nom ici : Damien !!!';
  stateButton = false;
  image = 'assets/bnpLogo.jpg';
  maVar = '';
  values = '';
  myProperty = 'Coucou';


  constructor() { }

  ngOnInit() {
  }

  switchDisable() {
    this.maVar = 'on est la meilleure promo Epita';
  }

  changeMethode(event: any){
    this.values = event.target.value;
  }

}
