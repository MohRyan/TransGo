/*
  Warnings:

  - You are about to drop the column `bus` on the `poBus` table. All the data in the column will be lost.
  - You are about to drop the column `from` on the `poBus` table. All the data in the column will be lost.
  - You are about to drop the column `going` on the `poBus` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `poBus` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `poBus` table. All the data in the column will be lost.
  - You are about to drop the column `totalTiket` on the `poBus` table. All the data in the column will be lost.
  - Added the required column `PO` to the `poBus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "poBus" DROP COLUMN "bus",
DROP COLUMN "from",
DROP COLUMN "going",
DROP COLUMN "price",
DROP COLUMN "to",
DROP COLUMN "totalTiket",
ADD COLUMN     "PO" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Bus" (
    "id" TEXT NOT NULL,
    "bus" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "going" TEXT NOT NULL,
    "totalTiket" INTEGER NOT NULL,
    "poBusId" TEXT,

    CONSTRAINT "Bus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bus" ADD CONSTRAINT "Bus_poBusId_fkey" FOREIGN KEY ("poBusId") REFERENCES "poBus"("id") ON DELETE CASCADE ON UPDATE CASCADE;
