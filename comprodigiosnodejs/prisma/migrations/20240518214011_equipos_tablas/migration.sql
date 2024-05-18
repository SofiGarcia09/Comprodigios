/*
  Warnings:

  - You are about to alter the column `precio` on the `celulares` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `precio` on the `computadores` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `precio` on the `consolas` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `precio` on the `televisores` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `celulares` MODIFY `precio` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `computadores` MODIFY `precio` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `consolas` MODIFY `precio` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `televisores` MODIFY `precio` DOUBLE NOT NULL;
