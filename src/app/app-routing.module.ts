import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleButtonFormComponent } from './single-button-form/single-button-form.component';

const routes: Routes = [
  {
    path: '',
    component: SingleButtonFormComponent,
    data: {
      buttonText: {
        labeling: 'Connect with Pocket to get started!',
        id: 'auth-btn',
        on: 'Login'
      }
    }
  },
  {
    path: 'mypocket',
    component: SingleButtonFormComponent,
    data: {
      buttonText: {
        labeling: 'Find most recent saves not tagged YYYYMM',
        id: 'get-btn',
        on: 'Search'
      }
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
