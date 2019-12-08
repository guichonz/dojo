import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibraryComponent } from './components/library/library.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { ListLibrariesComponent } from './components/list-libraries/list-libraries.component';
import { LibraryFormComponent } from './components/library-form/library-form.component';
import { SearchComponent } from './components/search/search.component';
import { LibraryPrimeComponent } from "./components/library-prime/LibraryPrimeComponent";
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    DisplayDataComponent,
    ListLibrariesComponent,
    LibraryFormComponent,
    SearchComponent,
    LibraryPrimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
