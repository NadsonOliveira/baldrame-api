import { Module } from '@nestjs/common';
import { OrcamentoModule } from './orcamento.module';
import { ItemCatalogoModule } from './item-catalogo.module';

@Module({
  imports: [OrcamentoModule, ItemCatalogoModule],
})
export class AppModule {}
