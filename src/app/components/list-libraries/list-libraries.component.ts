import { Component, OnInit } from '@angular/core';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { AddressDTO } from 'src/app/shared-data/address-dto';
import { DirectorDTO } from 'src/app/shared-data/director-dto';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-list-libraries',
  templateUrl: './list-libraries.component.html',
  styleUrls: ['./list-libraries.component.scss']
})
export class ListLibrariesComponent implements OnInit {
  libraries: LibraryDTO[] = [
    // new LibraryDTO('1', 'Bibliothèque Parementier', 'PUBLIC',
    // new AddressDTO('Paris', 20, 75011, 'Avenue Toto1'),
    // new DirectorDTO('Mon', 'Colonnel')),
    // new LibraryDTO('2', 'Bibliothèque Damien', 'PUBLIC',
    // new AddressDTO('Vesoul', 20, 75011, 'Avenue Toto2'),
    // new DirectorDTO('Mon', 'Adjudant')),
    // new LibraryDTO('3', 'Bibliothèque François Mitterand', 'PUBLIC',
    // new AddressDTO('Paris', 20, 75011, 'Avenue Toto3'),
    // new DirectorDTO('Mon', 'Colonnel')),
    // new LibraryDTO('4', 'Bibliothèque Jacques Chirac', 'PUBLIC',
    // new AddressDTO('Vierzon', 20, 75011, 'Avenue Toto4'),
    // new DirectorDTO('Mon', 'Général'))
    ];

    numberOfClick: number;

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.numberOfClick = 0;
    // this.libraries =   this.libraries.filter(lib => {
    //   return lib.label.includes(searchText);
    // });

    //this.libraries =   this.libraries.filter(lib => lib.type === 'PUBLIC');
      this.libraryService.getAllLibraries().subscribe(libraries => this.libraries = libraries);

      this.libraryService.searchValue.subscribe((searchText) => {
        console.log('Valeur cherchée ' + searchText );
        this.libraries =   this.libraries.filter( lib => lib.label.includes(searchText));
      });

  }

  increaseCpt(){
    this.numberOfClick += 1;
  }

}
