-- CreateEnum
CREATE TYPE "RegisterByPlatform" AS ENUM ('GOOGLE', 'JOBLISTING');

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "registeredBy" "RegisterByPlatform" DEFAULT 'JOBLISTING',
ALTER COLUMN "password" DROP NOT NULL;
