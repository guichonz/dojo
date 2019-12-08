import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { AddressDTO } from 'src/app/shared-data/address-dto';
import { DirectorDTO } from 'src/app/shared-data/director-dto';
import { LibraryService } from 'src/app/services/library.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  @Input()
  library: LibraryDTO;
  link: string;
  numberOfClick = 0;
  @Output() alertClick = new EventEmitter();

  constructor(private libraryService: LibraryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.link = "/modifier/" + this.library.id;
    console.log('url : '  + this.link);
  }

  display(){
    console.log("id", this.link);
  }

  delete(){
    console.log("id", this.library.id);
    this.libraryService.deleteLibrary(this.library.id).subscribe (() => {
      console.log('Delete Success');
      //this.router.navigate(['/liste']);
      location.reload();
    },
    (error) => {
      console.log('une erreur est arrivée : ' + error );
    });
  }

  declencher() {
    this.numberOfClick += 1;
    this.alertClick.emit();
    // this.numberOfClick += 1;
    // console.log("Nombre de Click =" + this.library.label + this.numberOfClick);
  }
}
