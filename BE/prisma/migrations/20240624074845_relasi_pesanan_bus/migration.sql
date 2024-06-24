/*
  Warnings:

  - A unique constraint covering the columns `[busId]` on the table `pesanan` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `busId` to the `pesanan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "pesanan" ADD COLUMN     "busId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "pesanan_busId_key" ON "pesanan"("busId");

-- AddForeignKey
ALTER TABLE "pesanan" ADD CONSTRAINT "pesanan_busId_fkey" FOREIGN KEY ("busId") REFERENCES "Bus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
