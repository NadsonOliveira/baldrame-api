import { Module } from '@nestjs/common';
import { OrcamentoModule } from './orcamento.module';
import { ItemCatalogoModule } from './item-catalogo.module';
import { PrismaModule } from 'src/Orcamento/infrastructure/database/prisma.module';

@Module({
  imports: [OrcamentoModule, ItemCatalogoModule, PrismaModule],
})
export class AppModule {}
