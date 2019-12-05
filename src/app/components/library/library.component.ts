import { Component, OnInit, Input } from '@angular/core';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { AddressDTO } from 'src/app/shared-data/address-dto';
import { DirectorDTO } from 'src/app/shared-data/director-dto';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  @Input()
  library: LibraryDTO;

  link : string;



  constructor() { }

  ngOnInit() {
    this.link = "/modifier/" + this.library.id;
    console.log('url : '  + this.link);
  }

  display(){
    console.log("id", this.link);
  }
}
