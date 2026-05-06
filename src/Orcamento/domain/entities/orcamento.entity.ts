import { FormaPagamento } from '../services/forma-pagamento.enum';
import { ItemOrcamento } from './item-orcamento.entity';

export class Orcamento {
  id?: string;
  empresa?: string;
  numero_orcamento?: string;
  validade_dias?: number;
  cliente?: string;
  tipo_obra?: string;
  nome_obra?: string;
  endereco?: string;
  total?: number;
  forma_pagamento?: FormaPagamento;
  entrada_percentual?: number;
  parcelas?: number;
  valor_entrada?: number;
  valor_parcela?: number;
  prazo_dias?: number;
  observacoes?: string;
  chave_pix?: string;
  telefone?: string;
  email?: string;
  created_at?: Date;
  itens?: ItemOrcamento[];
}
