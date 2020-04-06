import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { JokeComponent } from './joke.component';
import { JokeFormComponent } from './joke.form.component';
import { JokeListComponent } from './joke.list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
