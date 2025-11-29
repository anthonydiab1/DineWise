/*
  Warnings:

  - A unique constraint covering the columns `[restaurantId]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "restaurantId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_restaurantId_key" ON "Customer"("restaurantId");

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE SET NULL ON UPDATE CASCADE;
