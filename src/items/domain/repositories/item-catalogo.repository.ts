import { ItemCatalogo } from '../../../items/domain/entities/item-catalogo.entity';

export abstract class ItemCatalogoRepository {
  abstract create(data: ItemCatalogo): Promise<ItemCatalogo>;
  abstract findAll(): Promise<ItemCatalogo[]>;
  abstract findById(id: string): Promise<ItemCatalogo | null>;
}
