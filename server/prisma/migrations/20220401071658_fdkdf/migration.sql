/*
  Warnings:

  - You are about to drop the `ProductsInOrders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProductsInOrders" DROP CONSTRAINT "ProductsInOrders_orderId_fkey";

-- DropForeignKey
ALTER TABLE "ProductsInOrders" DROP CONSTRAINT "ProductsInOrders_productId_fkey";

-- DropTable
DROP TABLE "ProductsInOrders";

-- CreateTable
CREATE TABLE "Shipping" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Shipping_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Shipping" ADD CONSTRAINT "Shipping_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipping" ADD CONSTRAINT "Shipping_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
