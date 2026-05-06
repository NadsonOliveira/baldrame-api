export class ItemOrcamento {
  id?: string;
  orcamento_id?: string;
  item_catalogo_id?: string;
  descricao?: string;
  unidade!: string;
  quantidade!: number;
  preco_unitario!: number;
  total!: number;
}
