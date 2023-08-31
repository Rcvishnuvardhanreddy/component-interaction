import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent1Component } from './childs/child-component1/child-component1.component';
import { ChildComponent2Component } from './childs/child-component2/child-component2.component';
import { ChildComponent3Component } from './childs/child-component3/child-component3.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent1Component,
    ChildComponent2Component,
    ChildComponent3Component,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
