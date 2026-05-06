import { Orcamento } from '../entities/orcamento.entity';

export abstract class OrcamentoRepository {
  abstract create(data: Orcamento): Promise<Orcamento>;
  abstract findAll(): Promise<Orcamento[]>;
  abstract findById(id: string): Promise<Orcamento | null>;
}
