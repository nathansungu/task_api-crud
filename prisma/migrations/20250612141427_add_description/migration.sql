/*
  Warnings:

  - Changed the type of `is_complete` on the `task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `is_deleted` on the `task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "task" DROP COLUMN "is_complete",
ADD COLUMN     "is_complete" BOOLEAN NOT NULL,
DROP COLUMN "is_deleted",
ADD COLUMN     "is_deleted" BOOLEAN NOT NULL;
