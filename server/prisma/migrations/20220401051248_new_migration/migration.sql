/*
  Warnings:

  - You are about to drop the `shippings` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "shippings" DROP CONSTRAINT "shippings_orderId_fkey";

-- DropForeignKey
ALTER TABLE "shippings" DROP CONSTRAINT "shippings_userId_fkey";

-- DropTable
DROP TABLE "shippings";

-- CreateTable
CREATE TABLE "ProductsInOrders" (
    "productId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "ProductsInOrders_pkey" PRIMARY KEY ("productId","orderId")
);

-- AddForeignKey
ALTER TABLE "ProductsInOrders" ADD CONSTRAINT "ProductsInOrders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsInOrders" ADD CONSTRAINT "ProductsInOrders_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
