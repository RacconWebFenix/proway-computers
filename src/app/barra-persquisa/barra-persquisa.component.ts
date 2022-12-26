import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-barra-persquisa',
  templateUrl: './barra-persquisa.component.html',
  styleUrls: ['./barra-persquisa.component.css'],
})
export class BarraPersquisaComponent {
  faMagnifyingGlass = faMagnifyingGlass;

  descricao = '';

  constructor(private route: Router) {}

  pesquisar() {
    if (this.descricao) {
      this.route.navigate(['produtos'], {
        queryParams: { descricao: this.descricao },
      });

      return;
    }

    this.route.navigate(['produtos']);
  }
}
