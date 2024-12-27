import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StdDashBoaredComponent } from './shared/components/std-dash-boared/std-dash-boared.component';
import { StdFormComponent } from './shared/components/std-form/std-form.component';
import { StdTableComponent } from './shared/components/std-table/std-table.component';

@NgModule({
  declarations: [
    AppComponent,
    StdDashBoaredComponent,
    StdFormComponent,
    StdTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
