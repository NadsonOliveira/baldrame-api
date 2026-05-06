import { Injectable } from '@nestjs/common';
import { ItemCatalogoRepository } from '../../../domain/repositories/item-catalogo.repository';
import { CreateItemCatalogoDto } from '../../dto/create-item-catalogo.dto';

@Injectable()
export class CreateItemCatalogoUseCase {
  constructor(private readonly repository: ItemCatalogoRepository) {}

  async execute(data: CreateItemCatalogoDto) {
    return this.repository.create(data as any);
  }
}
