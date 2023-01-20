import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateGuard } from './canactivate.guard';
import { ListaComponent } from './principal/lista/lista.component';
import { LoginComponent } from './principal/login/login.component';

const routes: Routes = [
  {path:'lista', component : ListaComponent, canActivate: [CanactivateGuard]},

  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
