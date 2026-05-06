import { ItemOrcamento } from '../entities/item-orcamento.entity';

export abstract class ItemOrcamentoRepository {
  abstract create(data: ItemOrcamento): Promise<ItemOrcamento>;
  abstract delete(id: string): Promise<void>;
}
