/*
  Warnings:

  - A unique constraint covering the columns `[mongoId]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mongoId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "mongoId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Course_mongoId_key" ON "Course"("mongoId");
