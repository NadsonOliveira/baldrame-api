import { Module } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { ItemCatalogoController } from '../controllers/item-catalogo.controller';
import { CreateItemCatalogoUseCase } from 'src/Orcamento/application/use-cases/item-catalogo/create-item-catalogo.usecase';
import { FindAllItemCatalogoUseCase } from 'src/Orcamento/application/use-cases/item-catalogo/find-all-item-catalogo.usecase';
import { ItemCatalogoRepository } from 'src/Orcamento/domain/repositories/item-catalogo.repository';
import { ItemCatalogoPrismaRepository } from 'src/Orcamento/infrastructure/repositories/item-catalogo.prisma.repository';
import { ConfigModule } from '@nestjs/config';

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
})
export class ItemCatalogoModule {}
