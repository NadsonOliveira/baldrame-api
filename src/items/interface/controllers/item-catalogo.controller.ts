import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateItemCatalogoDto } from '../../application/dto/create-item-catalogo.dto';
import { CreateItemCatalogoUseCase } from '../../application/use-cases/item-catalogo/create-item-catalogo.usecase';
import { FindAllItemCatalogoUseCase } from '../../application/use-cases/item-catalogo/find-all-item-catalogo.usecase';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Itens do Catálogo')
@Controller('itens-catalogo')
export class ItemCatalogoController {
  constructor(
    private readonly createUseCase: CreateItemCatalogoUseCase,
    private readonly findAllUseCase: FindAllItemCatalogoUseCase,
  ) {}

  @Post()
  async create(@Body() body: CreateItemCatalogoDto) {
    return this.createUseCase.execute(body);
  }

  @Get()
  async findAll() {
    return this.findAllUseCase.execute();
  }
}
