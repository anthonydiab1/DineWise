-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('CUSTOMER', 'RESTAURANT_OWNER');

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'CUSTOMER';
