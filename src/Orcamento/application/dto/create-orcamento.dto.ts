import { ApiPropertyOptional } from '@nestjs/swagger';
import { FormaPagamento } from '../../domain/services/forma-pagamento.enum';

export class CreateItemOrcamentoDto {
  @ApiPropertyOptional({
    description: 'ID do item cadastrado no catálogo',
    example: 'uuid-item-catalogo',
  })
  item_catalogo_id?: string;

  @ApiPropertyOptional({
    description: 'Descrição manual do item',
    example: 'Concreto usinado',
  })
  descricao?: string;

  @ApiPropertyOptional({
    description: 'Unidade de medida',
    example: 'm²',
  })
  unidade?: string;

  @ApiPropertyOptional({
    description: 'Quantidade do item',
    example: 100,
  })
  quantidade?: number;

  @ApiPropertyOptional({
    description: 'Preço unitário',
    example: 150.5,
  })
  preco_unitario?: number;
}

export class CreateOrcamentoDto {
  @ApiPropertyOptional({
    description: 'Nome da empresa',
    example: 'Baldrame Construções',
  })
  empresa?: string;

  @ApiPropertyOptional({
    description: 'Número do orçamento',
    example: 'ORC-2026-001',
  })
  numero_orcamento?: string;

  @ApiPropertyOptional({
    description: 'Validade em dias',
    example: 15,
  })
  validade_dias?: number;

  @ApiPropertyOptional({
    description: 'Nome do cliente',
    example: 'João da Silva',
  })
  cliente?: string;

  @ApiPropertyOptional({
    description: 'Tipo da obra',
    example: 'Residencial',
  })
  tipo_obra?: string;

  @ApiPropertyOptional({
    description: 'Nome da obra',
    example: 'Casa Alphaville',
  })
  nome_obra?: string;

  @ApiPropertyOptional({
    description: 'Endereço da obra',
    example: 'Rua das Palmeiras, 123',
  })
  endereco?: string;

  @ApiPropertyOptional({
    description: 'Forma de pagamento',
    enum: FormaPagamento,
    example: FormaPagamento.PIX,
  })
  forma_pagamento?: FormaPagamento;

  @ApiPropertyOptional({
    description: 'Percentual de entrada',
    example: 20,
  })
  entrada_percentual?: number;

  @ApiPropertyOptional({
    description: 'Número de parcelas',
    example: 3,
  })
  parcelas?: number;

  @ApiPropertyOptional({
    description: 'Valor da entrada',
    example: 5000,
  })
  valor_entrada?: number;

  @ApiPropertyOptional({
    description: 'Valor por parcela',
    example: 2500,
  })
  valor_parcela?: number;

  @ApiPropertyOptional({
    description: 'Prazo em dias',
    example: 30,
  })
  prazo_dias?: number;

  @ApiPropertyOptional({
    description: 'Observações adicionais',
    example: 'Material incluso',
  })
  observacoes?: string;

  @ApiPropertyOptional({
    description: 'Chave PIX',
    example: 'empresa@email.com',
  })
  chave_pix?: string;

  @ApiPropertyOptional({
    description: 'Telefone para contato',
    example: '(27) 99999-9999',
  })
  telefone?: string;

  @ApiPropertyOptional({
    description: 'Email para contato',
    example: 'contato@empresa.com',
  })
  email?: string;

  @ApiPropertyOptional({
    description: 'Lista de itens do orçamento',
    type: [CreateItemOrcamentoDto],
  })
  itens?: CreateItemOrcamentoDto[];
}
