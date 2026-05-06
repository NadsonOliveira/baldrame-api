import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Orcamento } from '../../domain/entities/orcamento.entity';
import { OrcamentoRepository } from '../../domain/repositories/orcamento.repository';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class OrcamentoPrismaRepository implements OrcamentoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Orcamento): Promise<Orcamento> {
    console.log('Creating Orcamento with data:', data);
    const result = await this.prisma.orcamento.create({
      data: {
        ...(data as Prisma.OrcamentoCreateInput),
        itens: data.itens
          ? {
              create: data.itens.map((item) => ({
                item_catalogo_id: item.item_catalogo_id,
                descricao: item.descricao!,
                unidade: item.unidade,
                quantidade: item.quantidade,
                preco_unitario: item.preco_unitario,
                total: item.total,
              })),
            }
          : undefined,
      },
      include: {
        itens: {
          include: {
            item_catalogo: true,
          },
        },
      },
    });
    console.log('Created Orcamento:', result);
    return result as Orcamento;
  }

  async findAll(): Promise<Orcamento[]> {
    const result = await this.prisma.orcamento.findMany({
      include: {
        itens: {
          include: {
            item_catalogo: true,
          },
        },
      },
    });

    return result as Orcamento[];
  }

  async findById(id: string): Promise<Orcamento | null> {
    const result = await this.prisma.orcamento.findUnique({
      where: { id },
      include: {
        itens: {
          include: {
            item_catalogo: true,
          },
        },
      },
    });

    return result as Orcamento | null;
  }
}
