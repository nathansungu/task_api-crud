/*
  Warnings:

  - You are about to drop the column `title` on the `task` table. All the data in the column will be lost.
  - Added the required column `is_deleted` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_description` to the `task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `task_title` to the `task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "task" DROP COLUMN "title",
ADD COLUMN     "is_deleted" TEXT NOT NULL,
ADD COLUMN     "task_description" TEXT NOT NULL,
ADD COLUMN     "task_title" TEXT NOT NULL;
