import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CarrinhoService } from '../carrinho.service';
import { NotificacaoService } from '../notificacao.service';
import { IProdutoCarrinho } from '../produtos/produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent {
  itensCarrinho: IProdutoCarrinho[] = [];

  total = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private notifyService: NotificacaoService,
    private route: Router
  ) {}

  faXmark = faXmark;

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce(
      (prev, crr) => prev + crr.preco * crr.quantidade,
      0
    );
  }

  removerProdutoCarrinho(id: number) {
    this.itensCarrinho = this.itensCarrinho.filter((p) => p.id !== id);
    this.carrinhoService.removerProdutoCarrinho(id);
    this.calcularTotal();
  }

  comprar() {
    this.notifyService.notificar('Parabéns, você finalizou sua compra!');
    this.carrinhoService.limparCarrinho();
    this.route.navigate(['produtos']);
  }
}
