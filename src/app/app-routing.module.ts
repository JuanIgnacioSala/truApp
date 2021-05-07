import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { PiggyBankComponent } from './components/piggy-bank/piggy-bank.component';

const routes: Routes = [
  {path:'piggy-bank', component: PiggyBankComponent},
  {path:'contact', component: FormComponent},
  {path:'**',pathMatch:'full', redirectTo: '/piggy-bank' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
