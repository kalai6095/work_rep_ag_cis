import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WcateComponent} from './wcate/wcate.component';
import {ReportComponent} from './report/report.component';
import {WorkComponent} from './work/work.component';
import {NavComponent} from './nav/nav.component';
import {AddJComponent} from './add-j/add-j.component';
import {AddCComponent} from './add-c/add-c.component';
import {AddFComponent} from './add-f/add-f.component';
import {JWiseComponent} from './j-wise/j-wise.component';

import {CWiseComponent} from './c-wise/c-wise.component';
import {FWiseComponent} from './f-wise/f-wise.component';
import {EWiseComponent} from './e-wise/e-wise.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    WcateComponent,
    ReportComponent,
    WorkComponent,
    NavComponent,
    AddJComponent,
    AddCComponent,
    AddFComponent,
    JWiseComponent,
    CWiseComponent,
    FWiseComponent,
    EWiseComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule, AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
