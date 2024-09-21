/*
  Warnings:

  - You are about to drop the column `week` on the `Question` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "quizTitle" TEXT,
    CONSTRAINT "Question_quizTitle_fkey" FOREIGN KEY ("quizTitle") REFERENCES "Quiz" ("title") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Question" ("answer", "id", "question", "quizTitle") SELECT "answer", "id", "question", "quizTitle" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
CREATE TABLE "new_Quiz" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "week" INTEGER NOT NULL DEFAULT 1
);
INSERT INTO "new_Quiz" ("id", "title") SELECT "id", "title" FROM "Quiz";
DROP TABLE "Quiz";
ALTER TABLE "new_Quiz" RENAME TO "Quiz";
CREATE UNIQUE INDEX "Quiz_title_key" ON "Quiz"("title");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
