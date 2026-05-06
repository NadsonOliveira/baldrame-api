import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrcamentoDto } from '../../application/dto/create-orcamento.dto';
import { CreateOrcamentoUseCase } from '../../application/use-cases/orcamento/create-orcamento.usecase';
import { FindAllOrcamentoUseCase } from '../../application/use-cases/orcamento/find-all-orcamento.usecase';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Orçamentos')
@Controller('orcamentos')
export class OrcamentoController {
  constructor(
    private readonly createOrcamentoUseCase: CreateOrcamentoUseCase,
    private readonly findAllOrcamentoUseCase: FindAllOrcamentoUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateOrcamentoDto) {
    console.log('Received CreateOrcamentoDto:', body);
    return this.createOrcamentoUseCase.execute(body);
  }

  @Get()
  async findAll() {
    return this.findAllOrcamentoUseCase.execute();
  }
}
