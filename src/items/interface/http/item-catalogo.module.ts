import { Module } from '@nestjs/common';
import { PrismaService } from '../../../Orcamento/infrastructure/database/prisma.service';
import { ItemCatalogoController } from '../controllers/item-catalogo.controller';
import { ConfigModule } from '@nestjs/config';
import { ItemCatalogoPrismaRepository } from 'src/items/infrastructure/repositories/item-catalogo.prisma.repository';
import { CreateItemCatalogoUseCase } from 'src/items/application/use-cases/item-catalogo/create-item-catalogo.usecase';
import { FindAllItemCatalogoUseCase } from 'src/items/application/use-cases/item-catalogo/find-all-item-catalogo.usecase';
import { ItemCatalogoRepository } from 'src/items/domain/repositories/item-catalogo.repository';

@Module({
  controllers: [ItemCatalogoController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    PrismaService,
    CreateItemCatalogoUseCase,
    FindAllItemCatalogoUseCase,
    {
      provide: ItemCatalogoRepository,
      useClass: ItemCatalogoPrismaRepository,
    },
  ],
  exports: [ItemCatalogoRepository],
})
export class ItemCatalogoModule {}
