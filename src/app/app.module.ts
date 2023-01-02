import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { TimelineComponent } from './layout/timeline/timeline.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CardLineComponent } from './shared/components/card-line/card-line.component';
import { ModalRemoveComponent } from './shared/components/modal-remove/modal-remove.component';
import {ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimelineComponent,
    CardLineComponent,
    ModalRemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
