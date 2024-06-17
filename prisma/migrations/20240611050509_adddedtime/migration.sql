/*
  Warnings:

  - Added the required column `checkin` to the `Request` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkout` to the `Request` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Request" ADD COLUMN     "checkin" TEXT NOT NULL,
ADD COLUMN     "checkout" TEXT NOT NULL;
