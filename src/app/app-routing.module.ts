import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleButtonFormComponent } from './single-button-form/single-button-form.component';
import { AuthNoteComponent } from './auth-note/auth-note.component';

const routes: Routes = [
  {
    path: '',
    component: SingleButtonFormComponent,
    data: {
      buttonText: {
        labeling: 'Connect with Pocket to get started!',
        id: 'auth-btn',
        on: 'Login'
      },
      dest: 'login'
    }
  },
  {
    path: 'login',
    component: AuthNoteComponent,
    data: {
      note: 'Preparing to login and authorize with Pocket...'
    }
  },
  {
    path: 'auth',
    component: AuthNoteComponent,
    data: {
      note: 'Logging in and requesting access...'
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
      },
      dest: 'results'
    }
  },
  {
    path: 'results',
    component: AuthNoteComponent,
    data: {
      note: 'Here\'s your stuff...'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
