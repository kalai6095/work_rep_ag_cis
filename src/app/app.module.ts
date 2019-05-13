import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
