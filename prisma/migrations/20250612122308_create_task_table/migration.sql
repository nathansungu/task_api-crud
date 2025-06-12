-- CreateTable
CREATE TABLE "task" (
    "task_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "is_complete" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "task_pkey" PRIMARY KEY ("task_id")
);
