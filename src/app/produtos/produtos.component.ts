import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { IProduto } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {
  produtos: IProduto[] | undefined;

  constructor(
    private produtoService: ProdutosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const produtos = this.produtoService.getAll();
    this.route.queryParamMap.subscribe((parans) => {
      const descricao = parans.get('descricao')?.toLocaleLowerCase();
      if (descricao) {
        this.produtos = produtos.filter((p) =>
          p.descricao.toLocaleLowerCase().includes(descricao)
        );
        return;
      }

      this.produtos = produtos;
    });
  }
}
