import { Injectable } from '@nestjs/common';
import { ItemCatalogoRepository } from 'src/items/domain/repositories/item-catalogo.repository';

@Injectable()
export class FindAllItemCatalogoUseCase {
  constructor(private readonly repository: ItemCatalogoRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
