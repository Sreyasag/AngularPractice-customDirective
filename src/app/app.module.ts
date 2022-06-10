import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { RepeatDirective } from './repeat.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    RepeatDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
