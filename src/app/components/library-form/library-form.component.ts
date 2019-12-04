import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { typesValidator } from 'src/app/directives/type-validator.directive';
import { LibraryDTO } from 'src/app/shared-data/library-dto';
import { AddressDTO } from 'src/app/shared-data/address-dto';
import { DirectorDTO } from 'src/app/shared-data/director-dto';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.scss']
})
export class LibraryFormComponent implements OnInit {

  libraryForm = new FormGroup({
    label: new FormControl(''),
    type: new FormControl('', [typesValidator()]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl(''),
    city:  new FormControl('', [Validators.required, Validators.minLength(2)]),
    numberStreet:  new FormControl(''),
    postalCode:  new FormControl(''),
    street:  new FormControl('')
  });


  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

  get city() { return this.libraryForm.get('city'); }
  get firstName() { return this.libraryForm.get('firstName'); }
  get type() { return this.libraryForm.get('type'); }


  onSubmit() {
    console.warn(this.libraryForm.value);
    const libraryDTO = new LibraryDTO(null, this.libraryForm.value.label, this.libraryForm.value.type,
    // tslint:disable-next-line: max-line-length
    new AddressDTO( this.libraryForm.value.city, this.libraryForm.value.numberStreet, this.libraryForm.value.postalCode, this.libraryForm.value.street),
    new DirectorDTO( this.libraryForm.value.firstName, this.libraryForm.value.lastName));

    console.log(libraryDTO) ;

    this.libraryService.addLibrary(libraryDTO).subscribe (() => {
      console.log('Success');
    });
  }

// export function typesValidator(): ValidatorFn {
//     let types = ['public', 'NATIONAL'];
//     return (control: AbstractionControl): {[key: string]: any} | => {
//       const valid = types.includes(control.value);
//       return !valid ? {'availablestype': {value: control.value}} : null;
//     };
//   }
}
