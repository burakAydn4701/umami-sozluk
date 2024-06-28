/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "user";

-- CreateTable
CREATE TABLE "Entry" (
    "no" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "cretedAt" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorName" VARCHAR(255) NOT NULL,
    "baslikName" VARCHAR(255) NOT NULL,

    CONSTRAINT "Entry_pkey" PRIMARY KEY ("no")
);

-- CreateTable
CREATE TABLE "Baslik" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "Baslik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "username" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Baslik_title_key" ON "Baslik"("title");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Entry" ADD CONSTRAINT "Entry_baslikName_fkey" FOREIGN KEY ("baslikName") REFERENCES "Baslik"("title") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Entry" ADD CONSTRAINT "Entry_authorName_fkey" FOREIGN KEY ("authorName") REFERENCES "User"("username") ON DELETE NO ACTION ON UPDATE NO ACTION;
