-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('SUBMITTED', 'UNDER_REVIEW', 'MORE_INFORMATION_REQUIRED', 'ACCEPTED', 'REJECTED');

-- CreateEnum
CREATE TYPE "StudyLevel" AS ENUM ('ASSOCIATE', 'BACHELORS');

-- CreateEnum
CREATE TYPE "IntendedIntake" AS ENUM ('AUGUST_2027');

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'SUBMITTED',
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "nationality" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "program" TEXT NOT NULL,
    "studyLevel" "StudyLevel" NOT NULL,
    "intendedIntake" "IntendedIntake" NOT NULL,
    "previousSchool" TEXT NOT NULL,
    "qualification" TEXT NOT NULL,
    "completionYear" INTEGER NOT NULL,
    "academicResults" TEXT NOT NULL,
    "activities" TEXT,
    "testScores" TEXT,
    "personalStatement" TEXT,
    "confirmedAccuracy" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);
