-- CreateEnum
CREATE TYPE "FormaPagamento" AS ENUM ('PIX', 'BOLETO', 'CARTAO', 'DINHEIRO');

-- CreateTable
CREATE TABLE "Orcamento" (
    "id" TEXT NOT NULL,
    "empresa" TEXT NOT NULL,
    "numero_orcamento" TEXT,
    "validade_dias" INTEGER,
    "cliente" TEXT,
    "tipo_obra" TEXT,
    "nome_obra" TEXT,
    "endereco" TEXT,
    "total" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "forma_pagamento" "FormaPagamento",
    "entrada_percentual" INTEGER,
    "parcelas" INTEGER,
    "valor_entrada" DOUBLE PRECISION,
    "valor_parcela" DOUBLE PRECISION,
    "prazo_dias" INTEGER,
    "observacoes" TEXT,
    "chave_pix" TEXT,
    "telefone" TEXT,
    "email" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Orcamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemOrcamento" (
    "id" TEXT NOT NULL,
    "orcamento_id" TEXT NOT NULL,
    "item_catalogo_id" TEXT,
    "descricao" TEXT NOT NULL,
    "unidade" TEXT NOT NULL,
    "quantidade" DOUBLE PRECISION NOT NULL,
    "preco_unitario" DOUBLE PRECISION NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ItemOrcamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemCatalogo" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "unidade" TEXT NOT NULL,
    "preco_padrao" DOUBLE PRECISION,

    CONSTRAINT "ItemCatalogo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ItemOrcamento" ADD CONSTRAINT "ItemOrcamento_orcamento_id_fkey" FOREIGN KEY ("orcamento_id") REFERENCES "Orcamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemOrcamento" ADD CONSTRAINT "ItemOrcamento_item_catalogo_id_fkey" FOREIGN KEY ("item_catalogo_id") REFERENCES "ItemCatalogo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
