/*
  Warnings:

  - You are about to drop the column `whtsapp` on the `orgs` table. All the data in the column will be lost.
  - Added the required column `whatsapp` to the `orgs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "orgs" DROP COLUMN "whtsapp",
ADD COLUMN     "whatsapp" TEXT NOT NULL;
