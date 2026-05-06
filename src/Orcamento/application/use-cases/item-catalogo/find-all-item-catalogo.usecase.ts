import { Injectable } from '@nestjs/common';
import { ItemCatalogoRepository } from '../../../domain/repositories/item-catalogo.repository';

@Injectable()
export class FindAllItemCatalogoUseCase {
  constructor(private readonly repository: ItemCatalogoRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
