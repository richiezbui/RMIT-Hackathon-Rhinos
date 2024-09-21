/*
  Warnings:

  - Made the column `endTime` on table `Class` required. This step will fail if there are existing NULL values in that column.
  - Made the column `startTime` on table `Class` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Class" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "room" TEXT NOT NULL
);
INSERT INTO "new_Class" ("endTime", "id", "name", "room", "startTime") SELECT "endTime", "id", "name", "room", "startTime" FROM "Class";
DROP TABLE "Class";
ALTER TABLE "new_Class" RENAME TO "Class";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
