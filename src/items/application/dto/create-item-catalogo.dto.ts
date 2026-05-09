import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateItemCatalogoDto {
  @ApiPropertyOptional({
    description: 'Nome do item no catálogo',
    example: 'Concreto usinado',
  })
  nome?: string;

  @ApiPropertyOptional({
    description: 'Descrição do item',
    example: 'Concreto usinado de alta resistência',
  })
  descricao?: string;

  @ApiPropertyOptional({
    description: 'Unidade de medida do item',
    example: 'm³',
  })
  unidade?: string;

  @ApiPropertyOptional({
    description: 'Preço padrão do item',
    example: 150.0,
  })
  preco_padrao?: number;
}
