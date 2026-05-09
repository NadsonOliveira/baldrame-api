import { Injectable } from '@nestjs/common';
import { CreateItemCatalogoDto } from '../../dto/create-item-catalogo.dto';
import { ItemCatalogoRepository } from 'src/items/domain/repositories/item-catalogo.repository';

@Injectable()
export class CreateItemCatalogoUseCase {
  constructor(private readonly repository: ItemCatalogoRepository) {}

  async execute(data: CreateItemCatalogoDto) {
    return this.repository.create(data as any);
  }
}
