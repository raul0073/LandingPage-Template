-- CreateTable
CREATE TABLE "inflatables" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "size" TEXT NOT NULL DEFAULT '',
    "ageGroup" TEXT NOT NULL DEFAULT '',
    "restrictions" TEXT NOT NULL DEFAULT '',
    "price" TEXT NOT NULL DEFAULT '599',
    "isAvaliable" BOOLEAN NOT NULL DEFAULT true,
    "photos" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "visitis" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "inflatables_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "inflatables_id_name_key" ON "inflatables"("id", "name");
