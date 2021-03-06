import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLibrariesComponent } from './components/list-libraries/list-libraries.component';
import { LibraryFormComponent } from './components/library-form/library-form.component';
import { LibraryPrimeComponent } from "./components/library-prime/LibraryPrimeComponent";


const routes: Routes = [
  { path: 'liste', component: ListLibrariesComponent },
 // { path: 'listeprime', component: ListLibrariesPrimeComponent },
  { path: 'nouveau', component: LibraryFormComponent },
  { path: 'modifier/:id', component: LibraryFormComponent },
  { path: 'tableau', component: LibraryPrimeComponent },
  { path: '', redirectTo: '/liste', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }