import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ReportComponent } from './report/report.component';
import { EarningsComponent } from './earnings/earnings.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NavigationComponent } from './navigation/navigation.component';
import {HttpModule} from '@angular/http';
import {CalculationService} from '../app/calculation.service';
import {ModalModule} from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ReportComponent,
    EarningsComponent,
    HeaderComponent,
    MenuComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ModalModule.forRoot()
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
