import { Module } from '@nestjs/common';
import { OrcamentoModule } from './orcamento.module';
import { ItemCatalogoModule } from '../../../items/interface/http/item-catalogo.module';
import { PrismaModule } from 'src/Orcamento/infrastructure/database/prisma.module';

@Module({
  imports: [OrcamentoModule, ItemCatalogoModule, PrismaModule],
})
export class AppModule {}
