import { ItemOrcamento } from '../entities/item-orcamento.entity';

export class CalculoOrcamentoService {
  static calcularTotal(itens: ItemOrcamento[]): number {
    return itens.reduce(
      (total, item) => total + item.quantidade * item.preco_unitario,
      0,
    );
  }
}
