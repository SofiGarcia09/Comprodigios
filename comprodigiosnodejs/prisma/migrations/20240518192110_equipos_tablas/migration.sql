-- CreateTable
CREATE TABLE `celulares` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `sistemaOperativo` VARCHAR(191) NOT NULL,
    `pantalla` VARCHAR(191) NOT NULL,
    `RAM` VARCHAR(191) NOT NULL,
    `almacenamiento` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `computadores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `sistemaOperativo` VARCHAR(191) NOT NULL,
    `RAM` VARCHAR(191) NOT NULL,
    `almacenamiento` VARCHAR(191) NOT NULL,
    `pantalla` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `televisores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `resolucion` VARCHAR(191) NOT NULL,
    `sistemaOperativo` VARCHAR(191) NOT NULL,
    `color` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `consolas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `marca` VARCHAR(191) NOT NULL,
    `modelo` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `color` VARCHAR(191) NOT NULL,
    `almacenamiento` VARCHAR(191) NOT NULL,
    `sistemaOperativo` VARCHAR(191) NOT NULL,
    `RAM` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
