-- CreateEnum
CREATE TYPE "gender" AS ENUM ('Pria', 'Wanita');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profile" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "poBus" (
    "id" TEXT NOT NULL,
    "bus" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "from" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "going" TEXT NOT NULL,
    "totalTiket" INTEGER NOT NULL,

    CONSTRAINT "poBus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pesanan" (
    "id" TEXT NOT NULL,
    "NIK" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "jenisKelamin" "gender" NOT NULL,
    "noHP" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "pesanan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- AddForeignKey
ALTER TABLE "pesanan" ADD CONSTRAINT "pesanan_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
