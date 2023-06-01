import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleButtonFormComponent } from './single-button-form/single-button-form.component';
import { AuthNoteComponent } from './auth-note/auth-note.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleButtonFormComponent,
    AuthNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
