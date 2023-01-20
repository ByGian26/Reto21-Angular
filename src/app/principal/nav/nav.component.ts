import { Component } from '@angular/core';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  usuariologueado = false;
  constructor(public autenticacion: AutenticacionService){}

  ngOnInit(){
  this.usuariologueado = this.autenticacion.isLoggedIn('');
  this.autenticacion.changeLoginStatus$.subscribe(
  (loggedSatus: boolean) => this.usuariologueado = loggedSatus
  );
  }

  logout(){
  this.autenticacion.logout();
  }
}
