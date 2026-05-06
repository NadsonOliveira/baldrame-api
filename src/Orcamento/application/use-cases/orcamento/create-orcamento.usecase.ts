import { Injectable } from '@nestjs/common';
import { OrcamentoRepository } from '../../../domain/repositories/orcamento.repository';
import { CreateOrcamentoDto } from '../../dto/create-orcamento.dto';
import { ItemOrcamento } from '../../../domain/entities/item-orcamento.entity';

@Injectable()
export class CreateOrcamentoUseCase {
  constructor(private readonly repository: OrcamentoRepository) {}

  async execute(data: CreateOrcamentoDto) {
    let total = 0;

    const itens: ItemOrcamento[] =
      data.itens?.map((item) => {
        const quantidade = item.quantidade ?? 0;
        const precoUnitario = item.preco_unitario ?? 0;
        const totalItem = quantidade * precoUnitario;

        total += totalItem;

        return {
          item_catalogo_id: item.item_catalogo_id,
          descricao: item.descricao ?? '',
          unidade: item.unidade ?? '',
          quantidade,
          preco_unitario: precoUnitario,
          total: totalItem,
          orcamento_id: '',
        };
      }) || [];

    return this.repository.create({
      ...data,
      total,
      itens,
    });
  }
}
