/*
  Warnings:

  - You are about to drop the `endereco` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bairro` to the `Medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cidade` to the `Medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rua` to the `Medico` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uf` to the `Medico` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `endereco` DROP FOREIGN KEY `Endereco_medicoId_fkey`;

-- AlterTable
ALTER TABLE `medico` ADD COLUMN `bairro` VARCHAR(191) NOT NULL,
    ADD COLUMN `cidade` VARCHAR(191) NOT NULL,
    ADD COLUMN `complemento` VARCHAR(191) NULL,
    ADD COLUMN `rua` VARCHAR(191) NOT NULL,
    ADD COLUMN `uf` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `endereco`;
