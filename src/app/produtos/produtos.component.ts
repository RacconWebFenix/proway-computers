import { Component } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { IProduto } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {
  produtos: IProduto[] | undefined;

  constructor(private produtoService: ProdutosService) {}

  ngOnInit(): void {
    this.produtos = this.produtoService.getAll();
  }
}
