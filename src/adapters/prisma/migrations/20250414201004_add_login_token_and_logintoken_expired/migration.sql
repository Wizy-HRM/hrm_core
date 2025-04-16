/*
  Warnings:

  - You are about to drop the column `forgotPasswordToken` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `forgotPasswordTokenExpired` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `registerToken` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `registerTokenExpired` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `salt` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `salt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Company" DROP COLUMN "forgotPasswordToken",
DROP COLUMN "forgotPasswordTokenExpired",
DROP COLUMN "password",
DROP COLUMN "registerToken",
DROP COLUMN "registerTokenExpired",
DROP COLUMN "salt",
ADD COLUMN     "loginToken" TEXT,
ADD COLUMN     "loginTokenExpired" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "password",
DROP COLUMN "salt";
