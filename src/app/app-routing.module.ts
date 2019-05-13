import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WcateComponent} from './wcate/wcate.component';
import {WorkComponent} from './work/work.component';
import {AddCComponent} from './add-c/add-c.component';
import {AddFComponent} from './add-f/add-f.component';
import {AddJComponent} from './add-j/add-j.component';
import {CWiseComponent} from './c-wise/c-wise.component';
import {EWiseComponent} from './e-wise/e-wise.component';
import {FWiseComponent} from './f-wise/f-wise.component';
import {JWiseComponent} from './j-wise/j-wise.component';

const routes: Routes = [
  {path: 'category', component: WcateComponent},
  {path: 'work', component: WorkComponent},
  {path: 'add_c', component: AddCComponent},
  {path: 'add_f', component: AddFComponent},
  {path: 'add_j', component: AddJComponent},
  {path: 'c_wise', component: CWiseComponent},
  {path: 'e_wise', component: EWiseComponent},
  {path: 'f_wise', component: FWiseComponent},
  {path: 'j_wise', component: JWiseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
