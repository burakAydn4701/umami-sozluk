/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "entry" (
    "no" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "cretedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorName" VARCHAR(255) NOT NULL,
    "baslikName" TEXT NOT NULL,

    CONSTRAINT "entry_pkey" PRIMARY KEY ("no")
);

-- CreateTable
CREATE TABLE "baslik" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "baslik_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "baslik_title_key" ON "baslik"("title");

-- AddForeignKey
ALTER TABLE "entry" ADD CONSTRAINT "entry_baslikName_fkey" FOREIGN KEY ("baslikName") REFERENCES "baslik"("title") ON DELETE NO ACTION ON UPDATE NO ACTION;
