import { Injectable } from '@nestjs/common';
import { ItemCatalogo } from '../../domain/entities/item-catalogo.entity';
import { ItemCatalogoRepository } from '../../domain/repositories/item-catalogo.repository';
import { PrismaService } from '../../../Orcamento/infrastructure/database/prisma.service';

@Injectable()
export class ItemCatalogoPrismaRepository implements ItemCatalogoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: ItemCatalogo): Promise<ItemCatalogo> {
    const result = await this.prisma.itemCatalogo.create({
      data,
    });
    return result as ItemCatalogo;
  }

  async findAll(): Promise<ItemCatalogo[]> {
    const result = await this.prisma.itemCatalogo.findMany();
    return result as ItemCatalogo[];
  }

  async findById(id: string): Promise<ItemCatalogo | null> {
    const result = await this.prisma.itemCatalogo.findUnique({
      where: { id },
    });
    return result as ItemCatalogo | null;
  }
}
