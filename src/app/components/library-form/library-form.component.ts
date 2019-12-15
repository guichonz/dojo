import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { typesValidator } from 'src/app/directives/type-validator.directive';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { AddressDTO } from 'src/app/shared-data/address-dto';
import { DirectorDTO } from 'src/app/shared-data/director-dto';
import { LibraryService } from 'src/app/services/library.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.scss']
})
export class LibraryFormComponent implements OnInit {

  libraryForm = new FormGroup({
    id: new FormControl(''),
    label: new FormControl(''),
    type: new FormControl('', [typesValidator()]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    city:  new FormControl('', [Validators.required, Validators.minLength(2)]),
    numberStreet:  new FormControl(''),
    postalCode:  new FormControl(''),
    street:  new FormControl('')
  });
  library : LibraryDTO;


  constructor(private libraryService: LibraryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log("ici", id);
    if (id !== null) {
      this.libraryService.getLibrary(id).subscribe(library => {
        this.library = library;
        this.libraryForm.controls['id'].setValue(this.library.id);
        this.libraryForm.controls['label'].setValue(this.library.label);
        this.libraryForm.controls['type'].setValue(this.library.type);
        this.libraryForm.controls['firstName'].setValue(this.library.directorDTO.firstname);
        this.libraryForm.controls['lastName'].setValue(this.library.directorDTO.lastname);
        this.libraryForm.controls['city'].setValue(this.library.addressDTO.city);
        this.libraryForm.controls['numberStreet'].setValue(this.library.addressDTO.numberStreet);
        this.libraryForm.controls['postalCode'].setValue(this.library.addressDTO.postalCode);
        this.libraryForm.controls['street'].setValue(this.library.addressDTO.street);
      });
    }
  }

  get city() { return this.libraryForm.get('city'); }
  get firstName() { return this.libraryForm.get('firstName'); }
  get type() { return this.libraryForm.get('type'); }


  onSubmit() {
    console.warn(this.libraryForm.value);
    const libraryDTO = new LibraryDTO(this.libraryForm.value.id , this.libraryForm.value.label, this.libraryForm.value.type,
    // tslint:disable-next-line: max-line-length
    new AddressDTO( this.libraryForm.value.city, this.libraryForm.value.numberStreet, this.libraryForm.value.postalCode, this.libraryForm.value.street),
    new DirectorDTO( this.libraryForm.value.firstName, this.libraryForm.value.lastName));

    console.log("libraryDTO.id :",libraryDTO.id) ;
    if (libraryDTO.id === null || libraryDTO.id === undefined || libraryDTO.id === '' ) {
      this.libraryService.addLibrary(libraryDTO).subscribe (() => {
        console.log('Success');
        this.router.navigate(['/liste']);
      },
      (error) => {
        console.log('une erreur est arrivée1 : ' + error );
      });
    } else {
      this.libraryService.updateLibrary(libraryDTO).subscribe (() => {
        console.log('Success');
        this.router.navigate(['/liste']);
      },
      (error) => {
        console.log('une erreur est arrivée2 : ' + error );
      });
    }
  }

// export function typesValidator(): ValidatorFn {
//     let types = ['public', 'NATIONAL'];
//     return (control: AbstractionControl): {[key: string]: any} | => {
//       const valid = types.includes(control.value);
//       return !valid ? {'availablestype': {value: control.value}} : null;
//     };
//   }
}
