-- CreateEnum
CREATE TYPE "PlatFormStatus" AS ENUM ('HRM', 'JOBLISTING');

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "forgotPasswordToken" TIMESTAMP(3),
ADD COLUMN     "forgotPasswordTokenExpired" TIMESTAMP(3),
ADD COLUMN     "platform" "PlatFormStatus" NOT NULL DEFAULT 'JOBLISTING',
ADD COLUMN     "registerToken" TEXT,
ADD COLUMN     "registerTokenExpired" TIMESTAMP(3);
