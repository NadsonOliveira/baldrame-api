// import { PrismaClient } from '@prisma/client';
// import { ItemOrcamento } from '../../domain/entities/item-orcamento.entity';

// export class ItemOrcamentoPrismaRepository {
//   constructor(private readonly prisma: PrismaClient) {}

//   async create(itemOrcamento: ItemOrcamento): Promise<ItemOrcamento> {
//     return this.prisma.itemOrcamento.create({
//       data: {
//         orcamentoId: itemOrcamento.id,
//         produtoId: itemOrcamento.id,
//         quantidade: itemOrcamento.quantidade,
//         valorUnitario: itemOrcamento.valorUnitario,
//         desconto: itemOrcamento.desconto,
//         total: itemOrcamento.total,
//       },
//     });
//   }

//   async findById(id: string): Promise<ItemOrcamento | null> {
//     return this.prisma.itemOrcamento.findUnique({
//       where: { id },
//     });
//   }

//   async findByOrcamentoId(orcamentoId: string): Promise<ItemOrcamento[]> {
//     return this.prisma.itemOrcamento.findMany({
//       where: { orcamentoId },
//     });
//   }

//   async update(id: string, itemOrcamento: Partial<ItemOrcamento>): Promise<ItemOrcamento> {
//     return this.prisma.itemOrcamento.update({
//       where: { id },
//       data: itemOrcamento,
//     });
//   }

//   async delete(id: string): Promise<void> {
//     await this.prisma.itemOrcamento.delete({
//       where: { id },
//     });
//   }

//   async findAll(): Promise<ItemOrcamento[]> {
//     return this.prisma.itemOrcamento.findMany();
//   }
// }
