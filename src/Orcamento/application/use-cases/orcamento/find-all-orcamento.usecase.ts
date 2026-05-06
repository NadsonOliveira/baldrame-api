import { Injectable } from '@nestjs/common';
import { OrcamentoRepository } from '../../../domain/repositories/orcamento.repository';

@Injectable()
export class FindAllOrcamentoUseCase {
  constructor(private readonly repository: OrcamentoRepository) {}

  async execute() {
    return this.repository.findAll();
  }
}
