/*
  Warnings:

  - You are about to drop the `Baslik` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Entry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Entry" DROP CONSTRAINT "Entry_baslikName_fkey";

-- DropTable
DROP TABLE "Baslik";

-- DropTable
DROP TABLE "Entry";
