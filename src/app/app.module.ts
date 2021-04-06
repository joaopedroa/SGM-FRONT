import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { GeolocalizacaoComponent } from './geolocalizacao/geolocalizacao.component';
import { CarteiraComponent } from './carteira/carteira.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { AuthInterceptorService } from './guards/auth-interceptor.service';
import { CadastrarGeolocalizacaoComponent } from './dialogs/cadastrar-geolocalizacao/cadastrar-geolocalizacao.component';
import { CarteiraDescriptionComponent } from './dialogs/carteira-description/carteira-description.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    CarteiraDescriptionComponent

  ],
  providers: [AuthGuardService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
