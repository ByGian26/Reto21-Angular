import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  constructor(private userService: UserservicesService){}

  listado = new Array();
  ngOnInit(){

    this.userService.getUsersAll().subscribe({
      next: (UserAll : Users[]) => this.listado = UserAll,
      error: (e) => console.error(e),
      complete : () => console.info("La API devolvio todo los registros")
    })
  }
}
