/*
  Warnings:

  - You are about to drop the column `positionId` on the `JobListing` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `departmentId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerified` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `employmentType` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `jobEndDate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `jobStartDate` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `locationId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `managerId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `positionId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `User` table. All the data in the column will be lost.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Announcement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BankAccount` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Candidate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CandidateNote` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CareerSettings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompanySettings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contract` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CvAnalysis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DependentMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Document` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DocumentVerification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EmergencyContact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Holiday` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IdentificationDocument` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `JobApplicationHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LanguageSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LeaveAttachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LeaveRequest` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LeaveStatusAttachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LeaveStatusHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Location` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OnboardingInvitation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OnboardingProgress` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PersonalInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Position` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProjectMember` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Request` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RequestAttachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RequestStatusHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShiftEntry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `StatusAttachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TimeEntry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TimeSchedule` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserEmail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserPhone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserStatusHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `JobApplication` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `JobListing` table without a default value. This is not possible if the table is not empty.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_personalInfoId_fkey";

-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_changedBy_fkey";

-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_publishedBy_fkey";

-- DropForeignKey
ALTER TABLE "BankAccount" DROP CONSTRAINT "BankAccount_personalInfoId_fkey";

-- DropForeignKey
ALTER TABLE "CandidateNote" DROP CONSTRAINT "CandidateNote_candidateId_fkey";

-- DropForeignKey
ALTER TABLE "CandidateNote" DROP CONSTRAINT "CandidateNote_userId_fkey";

-- DropForeignKey
ALTER TABLE "Contract" DROP CONSTRAINT "Contract_onboardingId_fkey";

-- DropForeignKey
ALTER TABLE "CvAnalysis" DROP CONSTRAINT "CvAnalysis_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "DependentMember" DROP CONSTRAINT "DependentMember_userId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_dependentMemberId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_languageSkillId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_userId_fkey";

-- DropForeignKey
ALTER TABLE "DocumentVerification" DROP CONSTRAINT "DocumentVerification_documentId_fkey";

-- DropForeignKey
ALTER TABLE "DocumentVerification" DROP CONSTRAINT "DocumentVerification_reviewedById_fkey";

-- DropForeignKey
ALTER TABLE "DocumentVerification" DROP CONSTRAINT "DocumentVerification_userId_fkey";

-- DropForeignKey
ALTER TABLE "EmergencyContact" DROP CONSTRAINT "EmergencyContact_userId_fkey";

-- DropForeignKey
ALTER TABLE "IdentificationDocument" DROP CONSTRAINT "IdentificationDocument_personalInfoId_fkey";

-- DropForeignKey
ALTER TABLE "JobApplication" DROP CONSTRAINT "JobApplication_candidateId_fkey";

-- DropForeignKey
ALTER TABLE "JobApplicationHistory" DROP CONSTRAINT "JobApplicationHistory_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "JobApplicationHistory" DROP CONSTRAINT "JobApplicationHistory_changedByUserId_fkey";

-- DropForeignKey
ALTER TABLE "JobListing" DROP CONSTRAINT "JobListing_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "JobListing" DROP CONSTRAINT "JobListing_locationId_fkey";

-- DropForeignKey
ALTER TABLE "JobListing" DROP CONSTRAINT "JobListing_positionId_fkey";

-- DropForeignKey
ALTER TABLE "LanguageSkill" DROP CONSTRAINT "LanguageSkill_personalInfoId_fkey";

-- DropForeignKey
ALTER TABLE "LeaveAttachment" DROP CONSTRAINT "LeaveAttachment_leaveId_fkey";

-- DropForeignKey
ALTER TABLE "LeaveRequest" DROP CONSTRAINT "LeaveRequest_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "LeaveRequest" DROP CONSTRAINT "LeaveRequest_managerId_fkey";

-- DropForeignKey
ALTER TABLE "LeaveStatusAttachment" DROP CONSTRAINT "LeaveStatusAttachment_historyId_fkey";

-- DropForeignKey
ALTER TABLE "LeaveStatusHistory" DROP CONSTRAINT "LeaveStatusHistory_changedById_fkey";

-- DropForeignKey
ALTER TABLE "LeaveStatusHistory" DROP CONSTRAINT "LeaveStatusHistory_leaveId_fkey";

-- DropForeignKey
ALTER TABLE "OnboardingInvitation" DROP CONSTRAINT "OnboardingInvitation_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "OnboardingProgress" DROP CONSTRAINT "OnboardingProgress_applicationId_fkey";

-- DropForeignKey
ALTER TABLE "OnboardingProgress" DROP CONSTRAINT "OnboardingProgress_hiringManagerId_fkey";

-- DropForeignKey
ALTER TABLE "OnboardingProgress" DROP CONSTRAINT "OnboardingProgress_userId_fkey";

-- DropForeignKey
ALTER TABLE "PersonalInfo" DROP CONSTRAINT "PersonalInfo_userId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_managerId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectMember" DROP CONSTRAINT "ProjectMember_projectId_fkey";

-- DropForeignKey
ALTER TABLE "ProjectMember" DROP CONSTRAINT "ProjectMember_userId_fkey";

-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_managerId_fkey";

-- DropForeignKey
ALTER TABLE "Request" DROP CONSTRAINT "Request_requesterId_fkey";

-- DropForeignKey
ALTER TABLE "RequestAttachment" DROP CONSTRAINT "RequestAttachment_requestId_fkey";

-- DropForeignKey
ALTER TABLE "RequestStatusHistory" DROP CONSTRAINT "RequestStatusHistory_changedBy_fkey";

-- DropForeignKey
ALTER TABLE "RequestStatusHistory" DROP CONSTRAINT "RequestStatusHistory_requestId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "ShiftEntry" DROP CONSTRAINT "ShiftEntry_scheduleId_fkey";

-- DropForeignKey
ALTER TABLE "ShiftEntry" DROP CONSTRAINT "ShiftEntry_userId_fkey";

-- DropForeignKey
ALTER TABLE "StatusAttachment" DROP CONSTRAINT "StatusAttachment_historyId_fkey";

-- DropForeignKey
ALTER TABLE "TimeEntry" DROP CONSTRAINT "TimeEntry_projectId_fkey";

-- DropForeignKey
ALTER TABLE "TimeEntry" DROP CONSTRAINT "TimeEntry_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_locationId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_managerId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_positionId_fkey";

-- DropForeignKey
ALTER TABLE "UserEmail" DROP CONSTRAINT "UserEmail_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserPhone" DROP CONSTRAINT "UserPhone_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserStatusHistory" DROP CONSTRAINT "UserStatusHistory_changedById_fkey";

-- DropForeignKey
ALTER TABLE "UserStatusHistory" DROP CONSTRAINT "UserStatusHistory_userId_fkey";

-- DropIndex
DROP INDEX "JobListing_departmentId_idx";

-- DropIndex
DROP INDEX "User_departmentId_idx";

-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "User_locationId_idx";

-- AlterTable
ALTER TABLE "JobApplication" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "JobListing" DROP COLUMN "positionId",
ADD COLUMN     "companyId" INTEGER NOT NULL,
ADD COLUMN     "location" JSONB;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "departmentId",
DROP COLUMN "emailVerified",
DROP COLUMN "employmentType",
DROP COLUMN "firstName",
DROP COLUMN "image",
DROP COLUMN "jobEndDate",
DROP COLUMN "jobStartDate",
DROP COLUMN "lastName",
DROP COLUMN "locationId",
DROP COLUMN "managerId",
DROP COLUMN "name",
DROP COLUMN "positionId",
DROP COLUMN "role",
DROP COLUMN "status",
ADD COLUMN     "cv" TEXT,
ADD COLUMN     "personalIfo" JSONB,
ADD COLUMN     "salt" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Account";

-- DropTable
DROP TABLE "Address";

-- DropTable
DROP TABLE "Announcement";

-- DropTable
DROP TABLE "BankAccount";

-- DropTable
DROP TABLE "Candidate";

-- DropTable
DROP TABLE "CandidateNote";

-- DropTable
DROP TABLE "CareerSettings";

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "CompanySettings";

-- DropTable
DROP TABLE "Contract";

-- DropTable
DROP TABLE "CvAnalysis";

-- DropTable
DROP TABLE "Department";

-- DropTable
DROP TABLE "DependentMember";

-- DropTable
DROP TABLE "Document";

-- DropTable
DROP TABLE "DocumentVerification";

-- DropTable
DROP TABLE "EmergencyContact";

-- DropTable
DROP TABLE "Holiday";

-- DropTable
DROP TABLE "IdentificationDocument";

-- DropTable
DROP TABLE "JobApplicationHistory";

-- DropTable
DROP TABLE "LanguageSkill";

-- DropTable
DROP TABLE "LeaveAttachment";

-- DropTable
DROP TABLE "LeaveRequest";

-- DropTable
DROP TABLE "LeaveStatusAttachment";

-- DropTable
DROP TABLE "LeaveStatusHistory";

-- DropTable
DROP TABLE "Location";

-- DropTable
DROP TABLE "OnboardingInvitation";

-- DropTable
DROP TABLE "OnboardingProgress";

-- DropTable
DROP TABLE "PersonalInfo";

-- DropTable
DROP TABLE "Position";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "ProjectMember";

-- DropTable
DROP TABLE "Request";

-- DropTable
DROP TABLE "RequestAttachment";

-- DropTable
DROP TABLE "RequestStatusHistory";

-- DropTable
DROP TABLE "Session";

-- DropTable
DROP TABLE "ShiftEntry";

-- DropTable
DROP TABLE "StatusAttachment";

-- DropTable
DROP TABLE "TimeEntry";

-- DropTable
DROP TABLE "TimeSchedule";

-- DropTable
DROP TABLE "UserEmail";

-- DropTable
DROP TABLE "UserPhone";

-- DropTable
DROP TABLE "UserStatusHistory";

-- DropTable
DROP TABLE "VerificationToken";

-- DropEnum
DROP TYPE "AddressType";

-- DropEnum
DROP TYPE "ClientStatus";

-- DropEnum
DROP TYPE "ContractStatus";

-- DropEnum
DROP TYPE "DocumentType";

-- DropEnum
DROP TYPE "EducationLevel";

-- DropEnum
DROP TYPE "EmailType";

-- DropEnum
DROP TYPE "Gender";

-- DropEnum
DROP TYPE "GreekBank";

-- DropEnum
DROP TYPE "IdentificationDocumentType";

-- DropEnum
DROP TYPE "Language";

-- DropEnum
DROP TYPE "LeaveStatus";

-- DropEnum
DROP TYPE "LeaveType";

-- DropEnum
DROP TYPE "MaritalStatus";

-- DropEnum
DROP TYPE "OnboardingStatus";

-- DropEnum
DROP TYPE "Phase";

-- DropEnum
DROP TYPE "PhoneType";

-- DropEnum
DROP TYPE "Proficiency";

-- DropEnum
DROP TYPE "ProjectMemberRole";

-- DropEnum
DROP TYPE "ProjectStatus";

-- DropEnum
DROP TYPE "RequestPriority";

-- DropEnum
DROP TYPE "RequestStatus";

-- DropEnum
DROP TYPE "ShiftStatus";

-- DropEnum
DROP TYPE "TimeEntryStatus";

-- DropEnum
DROP TYPE "VerificationStatus";

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT,
    "tenantId" TEXT,
    "location" JSONB,
    "info" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JobListing" ADD CONSTRAINT "JobListing_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
