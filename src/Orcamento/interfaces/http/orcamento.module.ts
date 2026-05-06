import { Module } from '@nestjs/common';
import { CreateOrcamentoUseCase } from '../../application/use-cases/orcamento/create-orcamento.usecase';
import { FindAllOrcamentoUseCase } from '../../application/use-cases/orcamento/find-all-orcamento.usecase';
import { OrcamentoRepository } from '../../domain/repositories/orcamento.repository';
import { PrismaService } from '../../infrastructure/database/prisma.service';
import { OrcamentoController } from '../controllers/orcamento.controller';
import { OrcamentoPrismaRepository } from 'src/Orcamento/infrastructure/repositories/orcamento.prisma.prisma.repository';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [OrcamentoController],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    PrismaService,
    CreateOrcamentoUseCase,
    FindAllOrcamentoUseCase,
    {
      provide: OrcamentoRepository,
      useClass: OrcamentoPrismaRepository,
    },
  ],
})
export class OrcamentoModule {}
