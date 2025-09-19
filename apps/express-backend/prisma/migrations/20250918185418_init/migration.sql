-- CreateTable
CREATE TABLE "public"."messages" (
    "id" UUID NOT NULL,
    "name" VARCHAR(40) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "messages_pkey" PRIMARY KEY ("id")
);
